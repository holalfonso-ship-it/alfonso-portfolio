
-- Create a function to ensure the cv_files bucket exists
CREATE OR REPLACE FUNCTION public.create_cv_files_bucket()
RETURNS void
LANGUAGE plpgsql
AS $$
begin
    perform storage.create_bucket('cv_files', true);
end;
$$;
