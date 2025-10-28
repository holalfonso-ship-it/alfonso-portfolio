-- Add user_id column to code_snippets table
ALTER TABLE public.code_snippets
ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Drop all existing public access policies
DROP POLICY IF EXISTS "Allow public delete access to code snippets" ON public.code_snippets;
DROP POLICY IF EXISTS "Allow public insert access to code snippets" ON public.code_snippets;
DROP POLICY IF EXISTS "Allow public read access to code snippets" ON public.code_snippets;
DROP POLICY IF EXISTS "Allow public update access to code snippets" ON public.code_snippets;

-- Create secure RLS policies that require authentication
CREATE POLICY "Users can view all code snippets"
ON public.code_snippets
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can create their own code snippets"
ON public.code_snippets
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own code snippets"
ON public.code_snippets
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own code snippets"
ON public.code_snippets
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);