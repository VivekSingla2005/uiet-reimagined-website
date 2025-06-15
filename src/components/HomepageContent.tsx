
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Users, GraduationCap, BookOpen, Building, MapPin, Calendar, Trophy } from 'lucide-react';

const HomepageContent = () => {
  const features = [
    {
      icon: Award,
      title: 'Excellence in Education',
      description: 'NAAC A+ accredited institution with world-class faculty and infrastructure providing quality education since 2002.'
    },
    {
      icon: Users,
      title: 'Industry Partnerships',
      description: 'Strong ties with leading companies ensuring excellent placement opportunities and industry exposure for students.'
    },
    {
      icon: BookOpen,
      title: 'Research & Innovation',
      description: 'State-of-the-art research facilities fostering innovation and contributing to technological advancement.'
    },
    {
      icon: Building,
      title: 'Modern Infrastructure',
      description: 'Contemporary campus with advanced laboratories, smart classrooms, and digital library facilities.'
    }
  ];

  const departments = [
    {
      name: 'Computer Science & Engineering',
      description: 'Cutting-edge curriculum in software development, AI, and data science.',
      students: '500+',
      faculty: '25'
    },
    {
      name: 'Electronics & Communication',
      description: 'Advanced programs in embedded systems, VLSI, and communication networks.',
      students: '400+',
      faculty: '20'
    },
    {
      name: 'Mechanical Engineering',
      description: 'Comprehensive training in design, manufacturing, and thermal engineering.',
      students: '350+',
      faculty: '18'
    },
    {
      name: 'Civil Engineering',
      description: 'Infrastructure development, environmental engineering, and construction management.',
      students: '300+',
      faculty: '15'
    }
  ];

  const achievements = [
    { title: 'NAAC A+ Grade', description: 'Accredited with highest grade for academic excellence' },
    { title: 'NBA Accreditation', description: 'All major programs accredited by National Board of Accreditation' },
    { title: 'Research Publications', description: '500+ research papers published in international journals' },
    { title: 'Industry Partnerships', description: 'Collaborations with 50+ leading companies' }
  ];

  const events = [
    { date: 'Jan 15, 2024', title: 'Annual Tech Fest - TechnoUiet 2024', type: 'Student Event' },
    { date: 'Feb 10, 2024', title: 'International Conference on AI & ML', type: 'Academic' },
    { date: 'Mar 5, 2024', title: 'Industry-Academia Meet', type: 'Industry' },
    { date: 'Apr 20, 2024', title: 'Research Symposium', type: 'Research' }
  ];

  return (
    <div className="bg-white">
      {/* Features Section */}
      <section className="modern-section bg-gray-50">
        <div className="container-modern">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title-modern">Why Choose UIET?</h2>
            <p className="section-subtitle-modern">
              Discover what makes us a premier destination for engineering education and research excellence.
            </p>
          </div>
          <div className="responsive-grid">
            {features.map((feature, index) => (
              <div key={index} className="content-card text-center">
                <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="responsive-text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="responsive-text-sm text-gray-600 text-overflow-safe">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="modern-section">
        <div className="container-modern">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title-modern">Academic Departments</h2>
            <p className="section-subtitle-modern">
              Explore our diverse range of engineering disciplines with modern curricula and excellent faculty.
            </p>
          </div>
          <div className="responsive-grid-2">
            {departments.map((dept, index) => (
              <div key={index} className="content-card">
                <h3 className="responsive-text-xl font-semibold text-gray-900 mb-3">{dept.name}</h3>
                <p className="responsive-text-sm text-gray-600 mb-4 text-overflow-safe">{dept.description}</p>
                <div className="flex justify-between items-center text-sm text-blue-600">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {dept.students} Students
                  </span>
                  <span className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    {dept.faculty} Faculty
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/departments">
              <Button className="modern-button">
                View All Departments
                <BookOpen className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="modern-section bg-blue-50">
        <div className="container-modern">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title-modern">Our Achievements</h2>
            <p className="section-subtitle-modern">
              Recognition and accolades that reflect our commitment to excellence in education and research.
            </p>
          </div>
          <div className="responsive-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="content-card text-center">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="responsive-text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="responsive-text-sm text-gray-600 text-overflow-safe">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life & Events */}
      <section className="modern-section">
        <div className="container-modern">
          <div className="responsive-grid-2 items-center">
            <div>
              <h2 className="section-title-modern text-left">Campus Life & Events</h2>
              <p className="responsive-text-base text-gray-600 mb-6 leading-relaxed">
                Experience a vibrant campus life with numerous events, festivals, and activities that foster 
                learning, creativity, and personal growth. Our campus provides an environment where students 
                can excel academically while developing leadership skills and lifelong friendships.
              </p>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="responsive-text-sm text-blue-600 font-medium">{event.date}</div>
                      <div className="responsive-text-base font-semibold text-gray-900">{event.title}</div>
                      <div className="responsive-text-sm text-gray-500">{event.type}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/students">
                  <Button className="modern-button">
                    Explore Student Life
                    <Users className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=center" 
                alt="Campus Life" 
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="modern-section bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-modern">
          <div className="responsive-grid-2 items-center">
            <div>
              <h2 className="responsive-text-3xl font-bold mb-4 sm:mb-6">Visit Our Campus</h2>
              <p className="responsive-text-base mb-6 leading-relaxed">
                Located in the heart of Chandigarh, our campus offers a perfect blend of academic excellence 
                and modern amenities. Come visit us and experience the UIET difference.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100 responsive-text-sm">Sector 25, Chandigarh - 160014, India</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Campus Area</div>
                    <div className="text-blue-100 responsive-text-sm">25 Acres of Modern Infrastructure</div>
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg">
                  Get Directions
                  <MapPin className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center" 
                alt="Campus View" 
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageContent;
