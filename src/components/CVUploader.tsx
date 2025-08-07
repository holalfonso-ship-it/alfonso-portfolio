
import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, AlertCircle, Loader2, FileText, Trash2, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

const CVUploader: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [currentCV, setCurrentCV] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Fetch current CV on component mount
  useEffect(() => {
    fetchCurrentCV();
  }, []);

  const fetchCurrentCV = async () => {
    try {
      const { data: files, error } = await supabase.storage
        .from('cv_files')
        .list('', {
          limit: 1,
          sortBy: { column: 'created_at', order: 'desc' }
        });

      if (error) throw error;

      if (files && files.length > 0) {
        const { data: { publicUrl } } = supabase.storage
          .from('cv_files')
          .getPublicUrl(files[0].name);
        
        setCurrentCV(publicUrl);
      }
    } catch (error) {
      console.error('Error fetching current CV:', error);
    }
  };

  const deleteCurrentCV = async () => {
    if (!currentCV) return;
    
    setIsDeleting(true);
    try {
      // Extract filename from URL
      const fileName = currentCV.split('/').pop()?.split('?')[0];
      if (!fileName) throw new Error('Could not extract filename');

      const { error } = await supabase.storage
        .from('cv_files')
        .remove([fileName]);

      if (error) throw error;

      setCurrentCV(null);
      toast({
        title: "CV deleted",
        description: "Current CV has been removed successfully",
      });
    } catch (error) {
      console.error('Error deleting CV:', error);
      toast({
        title: "Delete failed",
        description: "There was a problem deleting the CV",
        variant: "destructive"
      });
    } finally {
      setIsDeleting(false);
    }
  };

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
      setCurrentCV(publicUrl); // Update current CV
      
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
    <div className="space-y-6">
      {/* Current CV Section */}
      {currentCV && (
        <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
          <h3 className="text-sm font-medium mb-3 text-foreground">CV Actual</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">CV disponible para descarga</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(currentCV, '_blank')}
              >
                <Eye className="h-4 w-4 mr-2" />
                Ver
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={deleteCurrentCV}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <label 
            htmlFor="cv-upload" 
            className="cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-primary/40 rounded-md p-4 hover:bg-primary/5 transition-colors"
          >
            {isUploading ? (
              <div className="flex items-center space-x-2 text-primary">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Subiendo CV...</span>
              </div>
            ) : uploadedFile ? (
              <div className="flex items-center space-x-2 text-primary">
                <CheckCircle className="h-5 w-5" />
                <span>CV subido exitosamente</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Upload className="h-5 w-5" />
                <span>{currentCV ? 'Reemplazar CV actual' : 'Subir nuevo CV'} (PDF)</span>
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
            Archivo CV subido y listo para descarga
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full" 
            onClick={() => {
              navigator.clipboard.writeText(uploadedFile);
              toast({
                title: "URL copiada!",
                description: "Enlace de descarga del CV copiado al portapapeles",
              });
            }}
          >
            Copiar Enlace de Descarga
          </Button>
        </div>
      )}
    </div>
  );
};

export default CVUploader;
