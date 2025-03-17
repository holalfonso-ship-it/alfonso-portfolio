
import React from 'react';
import { ImageUploaderProps } from './types';
import UploadArea from './UploadArea';
import ImagePreview from './ImagePreview';
import { useImageStorage } from './useImageStorage';

const ImageUploader: React.FC<ImageUploaderProps> = ({
  bucketName = 'site_images',
  onImageUploaded,
  aspectRatio = 16/9,
  maxWidth = '100%'
}) => {
  const { 
    isUploading, 
    uploadedImage, 
    setUploadedImage,
    uploadImage, 
    deleteImage 
  } = useImageStorage(bucketName);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const publicUrl = await uploadImage(file);
    
    if (publicUrl && onImageUploaded) {
      onImageUploaded(publicUrl);
    }
  };
  
  return (
    <div className="space-y-4" style={{ maxWidth }}>
      {!uploadedImage ? (
        <UploadArea 
          isUploading={isUploading} 
          onFileSelect={handleFileChange} 
        />
      ) : (
        <ImagePreview 
          imageUrl={uploadedImage}
          aspectRatio={aspectRatio}
          onDelete={deleteImage}
          onReset={() => setUploadedImage(null)}
        />
      )}
    </div>
  );
};

export default ImageUploader;
