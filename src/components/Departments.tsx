
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Computer, Zap, Cog, Building, Dna, Users, BookOpen, Award } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      name: 'Computer Science & Engineering',
      icon: Computer,
      head: 'Dr. Rajesh Kumar',
      faculty: 18,
      students: 240,
      description: 'Leading department in software development, AI, and emerging technologies.',
      specializations: ['Artificial Intelligence', 'Data Science', 'Cybersecurity', 'Software Engineering'],
      image: 'photo-1461749280684-dccba630e2f6'
    },
    {
      name: 'Electronics & Communication Engineering',
      icon: Zap,
      head: 'Dr. Priya Sharma',
      faculty: 15,
      students: 200,
      description: 'Excellence in electronics, communication systems, and signal processing.',
      specializations: ['VLSI Design', 'Embedded Systems', 'Communication Networks', 'IoT'],
      image: 'photo-1518877593221-1f28583780b4'
    },
    {
      name: 'Mechanical Engineering',
      icon: Cog,
      head: 'Dr. Amit Singh',
      faculty: 12,
      students: 180,
      description: 'Traditional engineering with modern applications in automation and design.',
      specializations: ['CAD/CAM', 'Robotics', 'Thermal Engineering', 'Manufacturing'],
      image: 'photo-1485833077593-4278bba3f11f'
    },
    {
      name: 'Civil Engineering',
      icon: Building,
      head: 'Dr. Neha Gupta',
      faculty: 10,
      students: 120,
      description: 'Infrastructure development and sustainable construction practices.',
      specializations: ['Structural Engineering', 'Environmental Engineering', 'Transportation', 'Geotechnical'],
      image: 'photo-1487252665478-49b61b47f302'
    },
    {
      name: 'Biotechnology',
      icon: Dna,
      head: 'Dr. Suresh Patel',
      faculty: 8,
      students: 90,
      description: 'Interdisciplinary approach to biological systems and technology.',
      specializations: ['Genetic Engineering', 'Bioinformatics', 'Bioprocessing', 'Medical Biotechnology'],
      image: 'photo-1501286353178-1ec881214838'
    }
  ];

  return (
    <section id="departments" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            World-class departments with experienced faculty, modern facilities, and strong industry connections.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {departments.map((dept, index) => (
            <Card key={index} className={`overflow-hidden hover-lift transition-all duration-300 animate-scaleIn stagger-${index + 1}`}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={`https://images.unsplash.com/${dept.image}?w=300&h=250&fit=crop&crop=center`}
                    alt={dept.name}
                    className="w-full h-48 md:h-full object-cover hover-scale"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 mb-2">
                      <dept.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 animate-bounce-soft" />
                      <CardTitle className="text-lg sm:text-xl text-gray-900 leading-tight">{dept.name}</CardTitle>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">{dept.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Department Head & Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900">{dept.faculty}</div>
                          <div className="text-xs sm:text-sm text-gray-600">Faculty</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900">{dept.students}</div>
                          <div className="text-xs sm:text-sm text-gray-600">Students</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900">A+</div>
                          <div className="text-xs sm:text-sm text-gray-600">Rating</div>
                        </div>
                      </div>

                      {/* Head of Department */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs sm:text-sm text-gray-600">Head of Department</div>
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">{dept.head}</div>
                      </div>

                      {/* Specializations */}
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-2">Key Areas:</div>
                        <div className="flex flex-wrap gap-2">
                          {dept.specializations.map((spec, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded hover-scale"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full hover-glow">
                        Explore Department
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Department Stats */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-6 sm:p-8 animate-scaleIn">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Department Excellence</h3>
            <p className="text-blue-200">Our departments consistently deliver outstanding results</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="animate-fadeInUp stagger-1">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-blue-300 animate-bounce-soft" />
              <div className="text-xl sm:text-2xl font-bold">63</div>
              <div className="text-blue-200 text-sm sm:text-base">Total Faculty</div>
            </div>
            <div className="animate-fadeInUp stagger-2">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-blue-300 animate-bounce-soft" />
              <div className="text-xl sm:text-2xl font-bold">830</div>
              <div className="text-blue-200 text-sm sm:text-base">Total Students</div>
            </div>
            <div className="animate-fadeInUp stagger-3">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-blue-300 animate-bounce-soft" />
              <div className="text-xl sm:text-2xl font-bold">15+</div>
              <div className="text-blue-200 text-sm sm:text-base">Programs</div>
            </div>
            <div className="animate-fadeInUp stagger-4">
              <Computer className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-blue-300 animate-bounce-soft" />
              <div className="text-xl sm:text-2xl font-bold">25+</div>
              <div className="text-blue-200 text-sm sm:text-base">Research Labs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
