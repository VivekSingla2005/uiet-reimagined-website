
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Students', value: '2000+' },
    { icon: BookOpen, label: 'Programs', value: '15+' },
    { icon: Award, label: 'Faculty', value: '100+' },
    { icon: TrendingUp, label: 'Placement Rate', value: '95%' }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center">
      {/* Clean background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium">
                Estd. 2002 • Premier Engineering Institute
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                University Institute of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Engineering & Technology
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl">
                Panjab University, Chandigarh
              </p>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                Empowering minds through excellence in engineering education, research, and innovation. 
                Join our legacy of creating tomorrow's technology leaders.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 hover-button">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-white hover:bg-white hover:text-slate-900 px-8 py-3 hover-button"
              >
                Explore Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=700&fit=crop&crop=center"
                alt="UIET Campus"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Achievement Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">NAAC A+ Accredited</h3>
                    <p className="text-sm text-slate-600">Top Engineering Institute in North India</p>
                  </div>
                  <div className="text-2xl">🏆</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
