
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransitionEffect from '@/components/TransitionEffect';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import ImageUploader from '@/components/ImageUploader';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SiteImages: React.FC = () => {
  const [images, setImages] = useState<Array<{ name: string, url: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      // List all files in the site_images bucket
      const { data, error } = await supabase.storage
        .from('site_images')
        .list();

      if (error) throw error;

      // Get public URLs for each file
      const imagesWithUrls = await Promise.all(
        data.filter(file => !file.id.endsWith('/')).map(async (file) => {
          const { data: { publicUrl } } = supabase.storage
            .from('site_images')
            .getPublicUrl(file.name);
          return {
            name: file.name,
            url: publicUrl
          };
        })
      );

      setImages(imagesWithUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast({
        title: "Error",
        description: "Failed to load images",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageDelete = async (fileName: string) => {
    try {
      const { error } = await supabase.storage
        .from('site_images')
        .remove([fileName]);

      if (error) throw error;

      // Update the local state
      setImages(images.filter(img => img.name !== fileName));

      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/admin" 
            className="inline-flex items-center text-sm text-primary mb-8 hover:underline transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Admin
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Site Images</h1>
          
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="upload">Upload New</TabsTrigger>
              <TabsTrigger value="library">Image Library</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="space-y-8">
              <div className="bg-card rounded-xl p-6 shadow-md border border-border/50">
                <h2 className="text-xl font-semibold mb-4">Upload New Image</h2>
                <p className="text-muted-foreground mb-6">
                  Upload images to be used throughout the site. Images will be stored in the Supabase storage bucket.
                </p>
                <ImageUploader 
                  bucketName="site_images"
                  onImageUploaded={() => fetchImages()}
                  maxWidth="600px"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="library">
              <div className="bg-card rounded-xl p-6 shadow-md border border-border/50">
                <h2 className="text-xl font-semibold mb-4">Image Library</h2>
                <p className="text-muted-foreground mb-6">
                  Manage all uploaded images. Click on an image to copy its URL.
                </p>
                
                {isLoading ? (
                  <div className="py-12 flex justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                      <span>Loading images...</span>
                    </div>
                  </div>
                ) : images.length === 0 ? (
                  <div className="py-12 text-center">
                    <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No images found</h3>
                    <p className="text-muted-foreground mb-6">
                      Start by uploading some images using the upload tab.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((image) => (
                      <Card key={image.name} className="overflow-hidden group">
                        <AspectRatio ratio={16/9}>
                          <img 
                            src={image.url} 
                            alt={image.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2">
                            <Button 
                              variant="secondary" 
                              size="sm"
                              onClick={() => {
                                navigator.clipboard.writeText(image.url);
                                toast({
                                  title: "URL copied!",
                                  description: "Image URL copied to clipboard",
                                });
                              }}
                            >
                              Copy URL
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleImageDelete(image.name)}
                            >
                              Delete
                            </Button>
                          </div>
                        </AspectRatio>
                        <CardContent className="p-3">
                          <p className="text-sm truncate" title={image.name}>
                            {image.name}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SiteImages;
