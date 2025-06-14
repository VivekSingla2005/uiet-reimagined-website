
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Academics from '@/components/Academics';
import Departments from '@/components/Departments';
import Faculty from '@/components/Faculty';
import Research from '@/components/Research';
import Students from '@/components/Students';
import Placements from '@/components/Placements';
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
      <Faculty />
      <Research />
      <Students />
      <Placements />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
