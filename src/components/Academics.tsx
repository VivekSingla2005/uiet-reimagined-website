
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Clock, Users, BookOpen, Award } from 'lucide-react';

const Academics = () => {
  const programs = {
    undergraduate: [
      {
        name: 'Computer Science & Engineering',
        duration: '4 Years',
        seats: '60',
        code: 'CSE',
        description: 'Comprehensive program covering software development, algorithms, and emerging technologies.',
        highlights: ['AI/ML', 'Data Science', 'Software Engineering', 'Cybersecurity']
      },
      {
        name: 'Electronics & Communication Engineering',
        duration: '4 Years',
        seats: '60',
        code: 'ECE',
        description: 'Focus on electronics, communication systems, and signal processing.',
        highlights: ['VLSI Design', 'Embedded Systems', 'Communication Networks', 'IoT']
      },
      {
        name: 'Mechanical Engineering',
        duration: '4 Years',
        seats: '60',
        code: 'ME',
        description: 'Traditional engineering discipline with modern applications.',
        highlights: ['CAD/CAM', 'Robotics', 'Thermal Engineering', 'Manufacturing']
      },
      {
        name: 'Biotechnology',
        duration: '4 Years',
        seats: '30',
        code: 'BT',
        description: 'Interdisciplinary program combining biology with technology.',
        highlights: ['Genetic Engineering', 'Bioinformatics', 'Bioprocessing', 'Medical Biotechnology']
      }
    ],
    postgraduate: [
      {
        name: 'M.Tech Computer Science & Engineering',
        duration: '2 Years',
        seats: '25',
        code: 'M.Tech CSE',
        description: 'Advanced study in computer science with research focus.',
        highlights: ['Research Projects', 'Advanced Algorithms', 'Machine Learning', 'Thesis Work']
      },
      {
        name: 'M.Tech Electronics & Communication',
        duration: '2 Years',
        seats: '25',
        code: 'M.Tech ECE',
        description: 'Specialized program in advanced electronics and communication.',
        highlights: ['VLSI Systems', 'Signal Processing', 'Communication Theory', 'Research']
      },
      {
        name: 'MBA (Technology Management)',
        duration: '2 Years',
        seats: '30',
        code: 'MBA-TM',
        description: 'Management program tailored for engineering graduates.',
        highlights: ['Technology Strategy', 'Innovation Management', 'Leadership', 'Entrepreneurship']
      }
    ],
    doctoral: [
      {
        name: 'Ph.D in Engineering',
        duration: '3-6 Years',
        seats: 'Variable',
        code: 'Ph.D',
        description: 'Research-intensive program for aspiring researchers and academicians.',
        highlights: ['Original Research', 'Publications', 'Teaching Experience', 'Industry Collaboration']
      }
    ]
  };

  const facilities = [
    {
      icon: BookOpen,
      title: 'Central Library',
      description: 'Over 50,000 books and digital resources'
    },
    {
      icon: Users,
      title: 'Research Labs',
      description: 'State-of-the-art laboratories for all departments'
    },
    {
      icon: Award,
      title: 'Industry Partnerships',
      description: 'Collaborations with leading companies'
    },
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Experienced professors and industry experts'
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Academic Programs
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">World-Class Education</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering education programs designed to prepare students for successful careers in technology and innovation.
          </p>
        </div>

        {/* Programs Tabs */}
        <Tabs defaultValue="undergraduate" className="mb-20">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-3 mb-8 h-12">
            <TabsTrigger value="undergraduate" className="px-8 text-base">Undergraduate</TabsTrigger>
            <TabsTrigger value="postgraduate" className="px-8 text-base">Postgraduate</TabsTrigger>
            <TabsTrigger value="doctoral" className="px-8 text-base">Doctoral</TabsTrigger>
          </TabsList>

          {Object.entries(programs).map(([level, programList]) => (
            <TabsContent key={level} value={level}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {programList.map((program, index) => (
                  <Card key={index} className="hover-card border border-slate-200 shadow-sm">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl text-slate-900 leading-tight pr-4">{program.name}</CardTitle>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                          {program.code}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-600">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {program.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {program.seats} Seats
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 mb-4 leading-relaxed">{program.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full hover-button">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Facilities */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Academic Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center hover-card border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <facility.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{facility.title}</h4>
                  <p className="text-slate-600">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
