
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Star, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide quality technical education and foster innovation in engineering and technology fields.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be a leading institute producing globally competent engineers and technologists.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Commitment to academic excellence and research innovation in all our endeavors.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong community of learners, researchers, and industry professionals.'
    }
  ];

  const achievements = [
    'NAAC Grade A+ Accreditation',
    'NBA Accredited Programs',
    'Top 50 Engineering Institutes in India',
    'Excellence in Research and Innovation',
    '95% Placement Record',
    'International Collaborations'
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About UIET</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2002, University Institute of Engineering & Technology is a premier 
            technical institute under Panjab University, Chandigarh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Content */}
          <div className="space-y-6 animate-fadeInLeft">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Pioneering Engineering Education Since 2002
            </h3>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base">
              <p>
                UIET stands as a beacon of excellence in engineering education, research, and innovation. 
                Located in the beautiful city of Chandigarh, we have been nurturing young minds and 
                shaping the future of technology for over two decades.
              </p>
              <p>
                Our institute offers undergraduate, postgraduate, and doctoral programs in various 
                engineering disciplines. With state-of-the-art facilities, experienced faculty, and 
                strong industry connections, we provide a holistic learning environment.
              </p>
              <p>
                We believe in fostering creativity, critical thinking, and innovation among our students, 
                preparing them to tackle the challenges of tomorrow's technological landscape.
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center text-xs sm:text-sm text-gray-600 animate-fadeInUp stagger-${index + 1}`}>
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fadeInRight">
            <div className="rounded-2xl overflow-hidden shadow-xl hover-lift">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
                alt="UIET Campus Building"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-blue-600 text-white p-3 sm:p-4 rounded-lg shadow-lg animate-scaleIn hover-glow">
              <div className="text-xl sm:text-2xl font-bold">20+</div>
              <div className="text-xs sm:text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`text-center hover-lift transition-all duration-300 animate-scaleIn stagger-${index + 1}`}>
              <CardContent className="p-4 sm:p-6">
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4 animate-bounce-soft" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
