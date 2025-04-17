
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransitionEffect from '@/components/TransitionEffect';
import { ArrowLeft, Image as ImageIcon, ChevronsUpDown, X, CheckCheck, RefreshCw } from 'lucide-react';
import ImageUploader from '@/components/ImageUploader';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const SiteImages: React.FC = () => {
  const [images, setImages] = useState<Array<{ name: string, url: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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
      setRefreshing(false);
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

  const handleRefresh = () => {
    setRefreshing(true);
    fetchImages();
  };

  return (
    <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/admin" 
              className="inline-flex items-center text-sm text-primary hover:underline transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Admin
            </Link>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={handleRefresh}
              disabled={refreshing || isLoading}
            >
              {refreshing ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              Refresh
            </Button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Site Images</h1>
          
          <Collapsible open={expandedInfo} onOpenChange={setExpandedInfo} className="mb-8">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground mb-2">
                Quick image management for your portfolio site
              </p>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {expandedInfo ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <ChevronsUpDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent>
              <Card className="bg-muted/30">
                <CardContent className="pt-6 text-sm">
                  <p className="mb-2">This page allows you to efficiently manage all images used in your portfolio:</p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Use <strong>Upload New</strong> to add new images to your site</li>
                    <li>The <strong>Image Library</strong> tab shows all uploaded images</li>
                    <li>Hover over any image to copy its URL or delete it</li>
                    <li>Use copied URLs in your project content</li>
                  </ul>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
          
          <Tabs defaultValue="library" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="library">Image Library</TabsTrigger>
              <TabsTrigger value="upload">Upload New</TabsTrigger>
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
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Image Library</h2>
                  <div className="text-sm text-muted-foreground">
                    {images.length} images
                  </div>
                </div>
                
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
                            loading="lazy"
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
                              className="w-32"
                            >
                              Copy URL
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleImageDelete(image.name)}
                              className="w-32"
                            >
                              Delete
                            </Button>
                          </div>
                        </AspectRatio>
                        <CardContent className="p-3">
                          <div className="flex justify-between items-center">
                            <p className="text-sm truncate" title={image.name}>
                              {image.name}
                            </p>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => {
                                navigator.clipboard.writeText(image.url);
                                toast({
                                  title: "URL copied!",
                                  variant: "default",
                                  description: <div className="flex items-center gap-1">
                                    <CheckCheck className="h-4 w-4" />
                                    <span>URL copied to clipboard</span>
                                  </div>
                                });
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard">
                                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                              </svg>
                            </Button>
                          </div>
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
