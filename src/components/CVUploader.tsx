
import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const CVUploader: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Only accept PDF files
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Ensure the bucket exists
      try {
        const { data: buckets } = await supabase.storage.listBuckets();
        const bucketExists = buckets?.some(bucket => bucket.name === 'cv_files');
        
        if (!bucketExists) {
          // Create the bucket if it doesn't exist
          await supabase.rpc('create_cv_files_bucket');
          console.log('CV files bucket created');
        }
      } catch (error) {
        console.error('Error checking/creating bucket:', error);
      }
      
      // Upload file to Supabase Storage
      const fileName = `cv-${Date.now()}.pdf`;
      const { data, error } = await supabase.storage
        .from('cv_files')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true
        });
        
      if (error) throw error;
      
      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('cv_files')
        .getPublicUrl(fileName);
        
      setUploadedFile(publicUrl);
      
      toast({
        title: "Success!",
        description: "CV uploaded successfully",
      });
      
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your file",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <label 
            htmlFor="cv-upload" 
            className="cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-primary/40 rounded-md p-4 hover:bg-primary/5 transition-colors"
          >
            {isUploading ? (
              <div className="flex items-center space-x-2 text-primary">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Uploading...</span>
              </div>
            ) : uploadedFile ? (
              <div className="flex items-center space-x-2 text-primary">
                <CheckCircle className="h-5 w-5" />
                <span>CV uploaded successfully</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Upload className="h-5 w-5" />
                <span>Upload CV (PDF)</span>
              </div>
            )}
          </label>
          <input 
            id="cv-upload" 
            type="file" 
            accept=".pdf" 
            className="hidden" 
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </div>
      </div>
      
      {uploadedFile && (
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-muted-foreground">
            CV file uploaded and ready for download
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full" 
            onClick={() => {
              navigator.clipboard.writeText(uploadedFile);
              toast({
                title: "URL copied!",
                description: "CV download link copied to clipboard",
              });
            }}
          >
            Copy Download Link
          </Button>
        </div>
      )}
    </div>
  );
};

export default CVUploader;
