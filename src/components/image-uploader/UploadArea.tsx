
import React from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { UploadAreaProps } from './types';

const UploadArea: React.FC<UploadAreaProps> = ({ isUploading, onFileSelect }) => {
  return (
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
          onChange={onFileSelect}
          disabled={isUploading}
        />
      </div>
    </div>
  );
};

export default UploadArea;
