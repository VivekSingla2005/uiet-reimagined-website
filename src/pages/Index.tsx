
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Academics from '@/components/Academics';
import Departments from '@/components/Departments';
import Admissions from '@/components/Admissions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Departments />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
