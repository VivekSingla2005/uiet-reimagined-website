
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
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fadeInLeft">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                University Institute of
                <span className="block text-yellow-400 animate-fadeInUp stagger-2">Engineering & Technology</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 animate-fadeInUp stagger-3">
                Panjab University, Chandigarh
              </p>
              <p className="text-base sm:text-lg text-blue-200 max-w-2xl leading-relaxed animate-fadeInUp stagger-4">
                Empowering minds through excellence in engineering education, research, and innovation. 
                Join our legacy of creating tomorrow's technology leaders.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp stagger-5">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 hover-lift hover-glow">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 hover-lift"
              >
                Explore Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 animate-fadeInUp stagger-6">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center hover-scale animate-scaleIn stagger-${index + 1}`}>
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-yellow-400 animate-bounce-soft" />
                  <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=700&fit=crop&crop=center"
                alt="UIET Campus"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-gray-900 animate-slideDown glass">
                <h3 className="font-semibold text-sm sm:text-base mb-1">Latest Achievement</h3>
                <p className="text-xs sm:text-sm text-gray-600">UIET ranked among top engineering institutes in North India</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full opacity-20 animate-float" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
