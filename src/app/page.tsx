// app/page.tsx
'use client';

import { useState } from 'react';
import History from './components/History';
import HeroSection from './components/Hero';
import WorkSection from './components/Featured';
import Navbar from './components/Navbar';
import ContactPage from './components/Contact';
import ToTop from './components/ToTop';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      <div
        className="bg-background transition-opacity duration-500"
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        <Navbar />
        <HeroSection />
        <WorkSection />
        <History />
        <ContactPage />
        <ToTop />
      </div>
    </>
  );
}