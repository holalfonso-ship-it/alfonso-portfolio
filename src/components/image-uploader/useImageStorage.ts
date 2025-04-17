
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '../ui/use-toast';

export const useImageStorage = (bucketName: string) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  // Check if bucket exists (on component mount)
  useEffect(() => {
    const checkBucketExists = async () => {
      try {
        const { data: buckets } = await supabase.storage.listBuckets();
        const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
        
        if (!bucketExists) {
          console.log(`${bucketName} bucket not found. Make sure it exists in Supabase storage.`);
        } else {
          console.log(`${bucketName} bucket found successfully.`);
        }
      } catch (error) {
        console.error('Error checking bucket:', error);
      }
    };
    
    checkBucketExists();
  }, [bucketName]);
  
  const uploadImage = async (file: File) => {
    if (!file) return null;
    
    // Only accept image files
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (jpg, png, gif, etc.)",
        variant: "destructive"
      });
      return null;
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
      
      toast({
        title: "Success!",
        description: "Image uploaded successfully",
      });

      return publicUrl;
      
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your image",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };
  
  const deleteImage = async () => {
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

  return {
    isUploading,
    uploadedImage,
    setUploadedImage,
    uploadImage,
    deleteImage
  };
};
