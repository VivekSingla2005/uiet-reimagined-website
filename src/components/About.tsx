
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About UIET</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2002, University Institute of Engineering & Technology is a premier 
            technical institute under Panjab University, Chandigarh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Pioneering Engineering Education Since 2002
            </h3>
            <div className="space-y-4 text-gray-600">
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
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center"
                alt="UIET Campus Building"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
