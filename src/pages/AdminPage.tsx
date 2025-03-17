
import React from 'react';
import CVUploader from '@/components/CVUploader';
import TransitionEffect from '@/components/TransitionEffect';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminPage: React.FC = () => {
  return (
    <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-primary mb-8 hover:underline transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-6 shadow-md border border-border/50">
              <h2 className="text-xl font-semibold mb-4">Upload CV</h2>
              <p className="text-muted-foreground mb-6">
                Upload a new PDF file that will be used as the downloadable CV across the site.
              </p>
              <CVUploader />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
