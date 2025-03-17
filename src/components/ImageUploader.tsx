
import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, AlertCircle, Loader2, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';
import { AspectRatio } from './ui/aspect-ratio';

interface ImageUploaderProps {
  bucketName?: string;
  onImageUploaded?: (url: string) => void;
  aspectRatio?: number;
  maxWidth?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  bucketName = 'site_images',
  onImageUploaded,
  aspectRatio = 16/9,
  maxWidth = '100%'
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  // Create bucket if it doesn't exist (on component mount)
  useEffect(() => {
    const ensureBucketExists = async () => {
      try {
        const { data: buckets } = await supabase.storage.listBuckets();
        const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
        
        if (!bucketExists) {
          // Create the bucket if it doesn't exist
          await supabase.rpc('create_site_images_bucket');
          console.log(`${bucketName} bucket created`);
        }
      } catch (error) {
        console.error('Error checking/creating bucket:', error);
      }
    };
    
    ensureBucketExists();
  }, [bucketName]);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Only accept image files
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (jpg, png, gif, etc.)",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Upload file to Supabase Storage
      const fileName = `image-${Date.now()}.${file.name.split('.').pop()}`;
      const { data, error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true
        });
        
      if (error) throw error;
      
      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fileName);
        
      setUploadedImage(publicUrl);
      
      if (onImageUploaded) {
        onImageUploaded(publicUrl);
      }
      
      toast({
        title: "Success!",
        description: "Image uploaded successfully",
      });
      
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your image",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  const handleDelete = async () => {
    if (!uploadedImage) return;
    
    try {
      // Extract file name from the URL
      const url = new URL(uploadedImage);
      const pathSegments = url.pathname.split('/');
      const fileName = pathSegments[pathSegments.length - 1];
      
      const { error } = await supabase.storage
        .from(bucketName)
        .remove([fileName]);
        
      if (error) throw error;
      
      setUploadedImage(null);
      
      toast({
        title: "Success!",
        description: "Image deleted successfully",
      });
      
    } catch (error) {
      console.error('Error deleting file:', error);
      toast({
        title: "Delete failed",
        description: "There was a problem deleting your image",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="space-y-4" style={{ maxWidth }}>
      {!uploadedImage ? (
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <label 
              htmlFor="image-upload" 
              className="cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-primary/40 rounded-md p-4 hover:bg-primary/5 transition-colors"
            >
              {isUploading ? (
                <div className="flex items-center space-x-2 text-primary">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Uploading...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Upload className="h-5 w-5" />
                  <span>Upload Image</span>
                </div>
              )}
            </label>
            <input 
              id="image-upload" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleFileChange}
              disabled={isUploading}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <AspectRatio ratio={aspectRatio} className="bg-muted rounded-lg overflow-hidden relative group">
            <img
              src={uploadedImage}
              alt="Uploaded image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleDelete}
                className="flex items-center space-x-1"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete Image
              </Button>
            </div>
          </AspectRatio>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full" 
              onClick={() => {
                navigator.clipboard.writeText(uploadedImage);
                toast({
                  title: "URL copied!",
                  description: "Image URL copied to clipboard",
                });
              }}
            >
              Copy URL
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setUploadedImage(null)}
            >
              Upload New
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
