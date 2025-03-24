
import React, { useEffect } from 'react';
import AboutContent from '../components/About/AboutContent';
import TransitionEffect from '../components/TransitionEffect';

const AboutPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">About Me</h1>
          <AboutContent />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
