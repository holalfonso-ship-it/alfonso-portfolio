
import { ReactNode } from 'react';

export interface ImageUploaderProps {
  bucketName?: string;
  onImageUploaded?: (url: string) => void;
  aspectRatio?: number;
  maxWidth?: string;
}

export interface ImagePreviewProps {
  imageUrl: string;
  aspectRatio: number;
  onDelete: () => Promise<void>;
  onReset: () => void;
}

export interface UploadAreaProps {
  isUploading: boolean;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
