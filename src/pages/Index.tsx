import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import CaseStudyTabs from '@/components/CaseStudyTabs';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import TransitionEffect from '@/components/TransitionEffect';
import HomeResources from '@/components/HomeResources';

const Index: React.FC = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Alfonso Zamorano — Senior Product Designer & DesignOps Specialist</title>
        <meta name="description" content="Senior Product Designer with 10+ years building digital products for 1M+ users. Specialising in marketplace design, DesignOps, and AI-native workflows." />
        <meta property="og:title" content="Alfonso Zamorano — Senior Product Designer & DesignOps Specialist" />
        <meta property="og:description" content="Senior Product Designer with 10+ years building digital products for 1M+ users. Specialising in marketplace design, DesignOps, and AI-native workflows." />
        <meta property="og:url" content="https://azportfolio.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://azportfolio.net/og-home.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alfonso Zamorano — Senior Product Designer & DesignOps Specialist" />
        <meta name="twitter:description" content="Senior Product Designer with 10+ years building digital products for 1M+ users. Specialising in marketplace design, DesignOps, and AI-native workflows." />
        <link rel="canonical" href="https://azportfolio.net/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alfonso Zamorano",
            "url": "https://azportfolio.net",
            "jobTitle": "Senior Product Designer & DesignOps Specialist",
            "description": "Senior Product Designer and DesignOps Specialist with 10+ years of experience building design systems, leading teams, and shipping products.",
            "sameAs": [
              "https://www.linkedin.com/in/alfonsozamorano"
            ]
          }
        `}</script>
      </Helmet>
      <TransitionEffect />
      <main className="flex-grow">
        <Hero />
        <CaseStudyTabs />
        <HomeResources />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
