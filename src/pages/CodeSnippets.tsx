
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Code, Plus, Edit, Trash2, Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import CodeSnippetForm from '@/components/CodeSnippetForm';
import CodeViewer from '@/components/CodeViewer';
import TransitionEffect from '@/components/TransitionEffect';

interface CodeSnippet {
  id: string;
  title: string;
  description: string | null;
  language: string;
  code_content: string;
  created_at: string;
  updated_at: string;
}

const CodeSnippets: React.FC = () => {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingSnippet, setEditingSnippet] = useState<CodeSnippet | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentSnippet, setCurrentSnippet] = useState<CodeSnippet | null>(null);

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('code_snippets')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setSnippets(data || []);
    } catch (error) {
      console.error('Error fetching snippets:', error);
      toast({
        title: 'Error fetching snippets',
        description: (error as Error).message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddSnippet = () => {
    setEditingSnippet(null);
    setIsFormOpen(true);
  };

  const handleEditSnippet = (snippet: CodeSnippet) => {
    setEditingSnippet(snippet);
    setIsFormOpen(true);
  };

  const handleViewSnippet = (snippet: CodeSnippet) => {
    setCurrentSnippet(snippet);
    setIsViewerOpen(true);
  };

  const handleDeleteSnippet = async (id: string) => {
    if (!confirm('Are you sure you want to delete this snippet?')) return;

    try {
      const { error } = await supabase
        .from('code_snippets')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Snippet deleted',
        description: 'The code snippet has been deleted successfully',
      });

      fetchSnippets();
    } catch (error) {
      console.error('Error deleting snippet:', error);
      toast({
        title: 'Error deleting snippet',
        description: (error as Error).message,
        variant: 'destructive',
      });
    }
  };

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/code-snippets/${id}`;
    navigator.clipboard.writeText(url);
    toast({
      title: 'Link copied',
      description: 'Sharable link copied to clipboard',
    });
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: 'Code copied',
      description: 'Code snippet copied to clipboard',
    });
  };

  const onFormSubmit = () => {
    setIsFormOpen(false);
    fetchSnippets();
  };

  return (
    <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-primary mb-8 hover:underline transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Code Snippets</h1>
            <Button onClick={handleAddSnippet}>
              <Plus className="mr-2 h-4 w-4" /> Add Snippet
            </Button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : snippets.length === 0 ? (
            <Card className="bg-muted/40 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Code className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No snippets yet</h3>
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  Create your first code snippet to store and access it from anywhere
                </p>
                <Button onClick={handleAddSnippet}>
                  <Plus className="mr-2 h-4 w-4" /> Add Snippet
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {snippets.map((snippet) => (
                <Card key={snippet.id} className="overflow-hidden h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="truncate">{snippet.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {snippet.language}
                        </CardDescription>
                      </div>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {new Date(snippet.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {snippet.description && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {snippet.description}
                      </p>
                    )}
                    <div 
                      className="bg-muted/50 p-3 rounded-md overflow-hidden text-xs font-mono h-24 cursor-pointer"
                      onClick={() => handleViewSnippet(snippet)}
                    >
                      <pre className="whitespace-pre-wrap line-clamp-6">{snippet.code_content}</pre>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2 border-t">
                    <div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleViewSnippet(snippet)}
                        title="View Code"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleCopyCode(snippet.code_content)}
                        title="Copy Code"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleEditSnippet(snippet)}
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleDeleteSnippet(snippet.id)}
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editingSnippet ? 'Edit Code Snippet' : 'Add New Code Snippet'}
            </DialogTitle>
          </DialogHeader>
          <CodeSnippetForm 
            snippet={editingSnippet} 
            onSubmit={onFormSubmit} 
            onCancel={() => setIsFormOpen(false)} 
          />
        </DialogContent>
      </Dialog>

      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="sm:max-w-3xl h-[80vh]">
          {currentSnippet && (
            <CodeViewer snippet={currentSnippet} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CodeSnippets;
