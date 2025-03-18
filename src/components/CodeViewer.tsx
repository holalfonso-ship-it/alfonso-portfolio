
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CodeSnippet {
  id: string;
  title: string;
  description: string | null;
  language: string;
  code_content: string;
  created_at: string;
  updated_at: string;
}

interface CodeViewerProps {
  snippet: CodeSnippet;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code_content);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();
  };

  return (
    <div className="flex flex-col h-full">
      <DialogHeader>
        <DialogTitle>{snippet.title}</DialogTitle>
        <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
              {snippet.language}
            </span>
            <span>Updated: {formatDate(snippet.updated_at)}</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-1" 
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy
              </>
            )}
          </Button>
        </div>
      </DialogHeader>

      {snippet.description && (
        <div className="mt-4 mb-2 px-1">
          <p className="text-sm text-muted-foreground">{snippet.description}</p>
        </div>
      )}
      
      <div className="flex-grow mt-4 bg-muted rounded-md overflow-auto">
        <pre className="p-4 text-sm font-mono whitespace-pre-wrap">{snippet.code_content}</pre>
      </div>
    </div>
  );
};

export default CodeViewer;
