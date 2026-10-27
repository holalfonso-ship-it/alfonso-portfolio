import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';

const Layout: React.FC = () => {
  return (
    <div className="app">
      <ThemeProvider defaultTheme="dark">
        <CursorEffect />
        <Header />
        <Outlet />
        <Footer />
        <Toaster />
        <Analytics />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
