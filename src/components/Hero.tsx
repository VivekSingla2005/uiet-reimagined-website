
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const quickStats = [
    { icon: GraduationCap, value: '20+', label: 'Years of Excellence' },
    { icon: Users, value: '2000+', label: 'Active Students' },
    { icon: Award, value: '95%', label: 'Placement Rate' },
    { icon: BookOpen, value: '15+', label: 'Programs Offered' }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container-modern relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">🏛️ Government Institute of Excellence</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Shaping Future 
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Engineers & Leaders
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                University Institute of Engineering & Technology - A premier government institution under Panjab University, 
                fostering innovation, excellence, and ethical values since 2002.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                NAAC A+ Accredited
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                NBA Approved Programs
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Industry Partnerships
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/admissions">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 rounded-xl group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Quick Navigation */}
            <div className="pt-8">
              <p className="text-blue-200 text-sm mb-4">Quick Access:</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/academics" className="text-blue-300 hover:text-white text-sm underline-offset-4 hover:underline transition-colors">
                  Academic Programs
                </Link>
                <Link to="/placements" className="text-blue-300 hover:text-white text-sm underline-offset-4 hover:underline transition-colors">
                  Placement Records
                </Link>
                <Link to="/research" className="text-blue-300 hover:text-white text-sm underline-offset-4 hover:underline transition-colors">
                  Research & Innovation
                </Link>
                <Link to="/contact" className="text-blue-300 hover:text-white text-sm underline-offset-4 hover:underline transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="modern-card glass-effect text-center p-6 hover-lift transform hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div className="mt-8 modern-card glass-effect p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose UIET?</h3>
              <div className="space-y-3 text-blue-100 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Premier government institution with 20+ years of excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>NAAC A+ accredited with world-class infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>95% placement rate with top industry partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Located in the beautiful planned city of Chandigarh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Explore More</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
