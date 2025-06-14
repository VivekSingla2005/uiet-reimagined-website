
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BookOpen, TrendingUp, FileText, ExternalLink, Star, MapPin } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '2000+', color: 'text-blue-600' },
    { icon: BookOpen, label: 'Academic Programs', value: '15+', color: 'text-green-600' },
    { icon: Award, label: 'Faculty Members', value: '100+', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Placement Rate', value: '95%', color: 'text-orange-600' }
  ];

  const announcements = [
    { text: 'Admission 2024-25 Open - Apply Now', urgent: true },
    { text: 'NIRF Ranking 2024 Released', urgent: false },
    { text: 'Convocation 2024 Schedule Announced', urgent: false }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Announcements Bar */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3">
        <div className="container-modern">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3 text-sm font-medium">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold">IMPORTANT:</span>
              <div className="hidden md:flex space-x-6">
                {announcements.map((announcement, index) => (
                  <span key={index} className={announcement.urgent ? 'font-bold' : ''}>
                    {announcement.text}
                  </span>
                ))}
              </div>
              <span className="md:hidden">Multiple announcements available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container-modern py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Government Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium shadow-sm">
              <Award className="w-5 h-5 mr-2" />
              Government Institute • NAAC A+ • Established 2002
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                University Institute of
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Engineering & Technology
                </span>
              </h1>
              <p className="text-2xl text-gray-700 font-medium">
                Panjab University, Chandigarh
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A premier technical institution committed to excellence in engineering education, 
              research, and innovation. Shaping the future through cutting-edge technology and world-class education.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="modern-button group hover-lift">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="modern-button-secondary group hover-lift">
                <FileText className="mr-2 h-5 w-5" />
                Download Prospectus
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 hover:bg-gray-50 group hover-lift px-8 py-3 rounded-lg">
                <ExternalLink className="mr-2 h-5 w-5" />
                Virtual Tour
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6">
              {['Student Portal', 'Faculty Login', 'Library', 'Results'].map((link) => (
                <a key={link} href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Campus Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover-lift">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
                alt="UIET Campus"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Campus Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 modern-card p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">UIET Campus</h3>
                <p className="text-gray-600">State-of-the-art facilities spread across 25 acres</p>
                <div className="flex items-center mt-3 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  Sector 25, Chandigarh
                </div>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl hover-glow">
              <div className="text-center">
                <div className="text-2xl font-bold">A+</div>
                <div className="text-sm font-medium">NAAC</div>
                <Star className="h-4 w-4 mx-auto mt-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="modern-card text-center p-8 hover-lift hover-glow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Important Cards Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="modern-card p-8 hover-lift hover-glow">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-4">Admissions 2024</h3>
            <p className="text-gray-600 mb-6">Apply for B.Tech, M.Tech, and Ph.D programs with our streamlined application process</p>
            <Button className="modern-button w-full">
              Apply Now
            </Button>
          </div>
          
          <div className="modern-card p-8 hover-lift hover-glow">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-4">Academic Resources</h3>
            <p className="text-gray-600 mb-6">Access comprehensive syllabus, timetables, and academic resources</p>
            <Button variant="outline" className="w-full modern-button-secondary">
              View Resources
            </Button>
          </div>
          
          <div className="modern-card p-8 hover-lift hover-glow">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-4">Placement Cell</h3>
            <p className="text-gray-600 mb-6">95% placement rate with leading companies and competitive packages</p>
            <Button variant="outline" className="w-full modern-button-secondary">
              Explore Careers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
