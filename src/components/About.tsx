
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
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            About UIET
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Excellence in Engineering Education</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2002, University Institute of Engineering & Technology is a premier 
            technical institute under Panjab University, Chandigarh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-900">
              Pioneering Engineering Education Since 2002
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
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
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Key Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
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
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-card border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
