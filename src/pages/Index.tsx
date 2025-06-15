
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HomepageContent from '@/components/HomepageContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HomepageContent />
      <Footer />
    </div>
  );
};

export default Index;
