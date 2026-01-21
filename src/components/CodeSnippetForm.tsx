
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  description: z.string().optional(),
  language: z.string().min(1, { message: 'Please select a language' }),
  code_content: z.string().min(1, { message: 'Code content is required' }),
});

interface CodeSnippet {
  id: string;
  title: string;
  description: string | null;
  language: string;
  code_content: string;
  created_at: string;
  updated_at: string;
}

interface CodeSnippetFormProps {
  snippet: CodeSnippet | null;
  onSubmit: () => void;
  onCancel: () => void;
}

const CodeSnippetForm: React.FC<CodeSnippetFormProps> = ({ 
  snippet,
  onSubmit,
  onCancel
}) => {
  const defaultValues = snippet
    ? {
        title: snippet.title,
        description: snippet.description || '',
        language: snippet.language,
        code_content: snippet.code_content,
      }
    : {
        title: '',
        description: '',
        language: 'javascript',
        code_content: '',
      };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (snippet) {
        // Update existing snippet
        const { error } = await supabase
          .from('code_snippets')
          .update({
            title: values.title,
            description: values.description || null,
            language: values.language,
            code_content: values.code_content,
            updated_at: new Date().toISOString(),
          })
          .eq('id', snippet.id);

        if (error) throw error;

        toast({
          title: 'Snippet updated',
          description: 'Your code snippet has been updated successfully',
        });
      } else {
        // Create new snippet
        const { error } = await supabase.from('code_snippets').insert({
          title: values.title,
          description: values.description || null,
          language: values.language,
          code_content: values.code_content,
        });

        if (error) throw error;

        toast({
          title: 'Snippet created',
          description: 'Your code snippet has been created successfully',
        });
      }

      onSubmit();
    } catch (error) {
      console.error('Error saving snippet:', error);
      toast({
        title: 'Error saving snippet',
        description: (error as Error).message,
        variant: 'destructive',
      });
    }
  };

  const programmingLanguages = [
    'javascript',
    'typescript',
    'html',
    'css',
    'jsx',
    'tsx',
    'json',
    'python',
    'java',
    'c',
    'cpp',
    'csharp',
    'php',
    'ruby',
    'go',
    'rust',
    'swift',
    'kotlin',
    'sql',
    'bash',
    'markdown',
    'yaml',
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter snippet title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Enter snippet description" 
                  className="resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {programmingLanguages.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="code_content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Paste your code here" 
                  className="resize-none font-mono h-64" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            {snippet ? 'Update Snippet' : 'Create Snippet'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CodeSnippetForm;
