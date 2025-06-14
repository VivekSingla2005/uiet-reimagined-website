
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BookOpen, TrendingUp, FileText, ExternalLink } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '2000+', color: 'text-green-700' },
    { icon: BookOpen, label: 'Academic Programs', value: '15+', color: 'text-blue-700' },
    { icon: Award, label: 'Faculty Members', value: '100+', color: 'text-purple-700' },
    { icon: TrendingUp, label: 'Placement Rate', value: '95%', color: 'text-amber-700' }
  ];

  const announcements = [
    { text: 'Admission 2024-25 Open - Apply Now', urgent: true },
    { text: 'NIRF Ranking 2024 Released', urgent: false },
    { text: 'Convocation 2024 Schedule Announced', urgent: false }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-amber-50">
      {/* Announcements Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container-width">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <span className="animate-pulse">🔴</span>
              <span>ANNOUNCEMENTS:</span>
              <div className="hidden md:flex space-x-4">
                {announcements.map((announcement, index) => (
                  <span key={index} className={announcement.urgent ? 'animate-pulse font-bold' : ''}>
                    {announcement.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-width py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Government Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-300 rounded text-green-800 text-sm font-semibold">
              <Award className="w-4 h-4 mr-2" />
              Government Institute • NAAC A+ • Established 2002
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                University Institute of
                <span className="block text-amber-600">
                  Engineering & Technology
                </span>
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                Panjab University, Chandigarh
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A premier technical institution committed to excellence in engineering education, 
              research, and innovation. Nurturing skilled engineers for the nation's development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="gov-button-primary group">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="gov-button-secondary group">
                <FileText className="mr-2 h-5 w-5" />
                Download Prospectus
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 hover:bg-gray-50 group">
                <ExternalLink className="mr-2 h-5 w-5" />
                Virtual Tour
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <span className="text-sm text-gray-600 font-medium">Quick Access:</span>
              {['Student Portal', 'Faculty Login', 'Library', 'Results', 'Timetable'].map((link) => (
                <a key={link} href="#" className="text-sm text-blue-600 hover:text-blue-800 underline">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Campus Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
                alt="UIET Campus"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Campus Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-1">UIET Campus</h3>
                <p className="text-gray-600 text-sm">State-of-the-art facilities spread across 25 acres</p>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-full shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold">A+</div>
                <div className="text-xs">NAAC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="gov-card text-center p-6 rounded-lg">
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Important Links Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="gov-card p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Admissions 2024</h3>
            <p className="text-gray-600 text-sm mb-4">Apply for B.Tech, M.Tech, and Ph.D programs</p>
            <Button className="gov-button-primary w-full">
              Apply Now
            </Button>
          </div>
          
          <div className="gov-card p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Academic Resources</h3>
            <p className="text-gray-600 text-sm mb-4">Access syllabus, timetables, and academic calendar</p>
            <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
              View Resources
            </Button>
          </div>
          
          <div className="gov-card p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Placement Cell</h3>
            <p className="text-gray-600 text-sm mb-4">Career opportunities and recruitment information</p>
            <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
              Explore Careers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
