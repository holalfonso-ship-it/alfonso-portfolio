
import React from 'react';

export const ProjectOverview: React.FC = () => {
  return <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="mb-6">
          Led the development and design of Wanup's B2B SaaS platform, a sophisticated solution for hotel bookings 
          and loyalty program management. This project focused on creating an intuitive and scalable platform that 
          would serve both hotel partners and end users effectively.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-3">Client</h3>
            <p>
              Wanup - A leading hotel loyalty program provider aiming to revolutionize the way hotels and guests 
              interact through a modern, digital-first platform.
            </p>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-3">My Role</h3>
            <p>
              Senior Product Designer - Responsible for the end-to-end design process, from UX research and 
              wireframing to final UI design and development handoff.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-3">Timeline</h3>
            <p>2 years (Aug 2016 - Jun 2018)</p>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-3">Tools Used</h3>
            <p>Sketch, InVision, Zeplin, Abstract</p>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-3">Team</h3>
            <p>4 Designers, 6 Developers, 2 Product Managers</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-border/50">
        <img alt="Supabase Database Schema" className="w-full h-auto" src="/lovable-uploads/b06acd6a-aa23-4f4d-a84d-b1f6516899fe.png" />
      </div>

      <div className="rounded-lg overflow-hidden border border-border/50">
        <img 
          alt="Wanup Landing Page Design" 
          className="w-full h-auto" 
          src="/lovable-uploads/17168ae9-eb7c-4ff0-9e04-97d7f8c5db12.png"
        />
      </div>
    </div>;
};

