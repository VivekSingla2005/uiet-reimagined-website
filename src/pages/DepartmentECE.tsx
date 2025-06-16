
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Target, BookOpen, GraduationCap, FlaskConical, 
  Calendar, Trophy, FileText, Mail, Phone, MapPin,
  Zap, Cpu, Radio, Satellite
} from 'lucide-react';

const DepartmentECE = () => {
  const programs = [
    { name: 'B.E. Electronics & Communication Engineering', duration: '4 Years', intake: '60' },
    { name: 'M.E. Electronics & Communication Engineering', duration: '2 Years', intake: '18' }
  ];

  const faculty = [
    { name: 'Dr. Rajesh Kumar', position: 'Professor & HOD', specialization: 'VLSI Design' },
    { name: 'Dr. Priya Sharma', position: 'Associate Professor', specialization: 'Signal Processing' },
    { name: 'Dr. Amit Singh', position: 'Assistant Professor', specialization: 'Communication Systems' },
    { name: 'Dr. Neha Gupta', position: 'Assistant Professor', specialization: 'Embedded Systems' }
  ];

  const labs = [
    'Digital Electronics Lab',
    'Analog Electronics Lab',
    'Communication Systems Lab',
    'VLSI Design Lab',
    'Microprocessor Lab',
    'Signal Processing Lab',
    'Antenna & Wave Propagation Lab',
    'Project Lab'
  ];

  const achievements = [
    'Best Paper Award at IEEE Conference 2024',
    'Patent Filed for IoT-based Health Monitoring System',
    'Students Won National Level Project Competition',
    'Research Grant of ₹15 Lakhs Received from DRDO'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Department Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Electronics & Communication Engineering</h1>
              <p className="text-xl text-purple-100">Innovating Communication Technologies</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="labs">Labs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To be a center of excellence in Electronics & Communication Engineering education and research, 
                    producing competent engineers who contribute to technological advancement and societal development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Provide quality education in ECE with emphasis on practical learning</li>
                    <li>• Foster innovation and research in emerging technologies</li>
                    <li>• Develop industry-ready professionals with strong ethical values</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Program Educational Objectives (PEOs)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">PEO1: Technical Competence</h4>
                    <p className="text-sm text-gray-600">Graduates will demonstrate technical competence in ECE domains</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">PEO2: Innovation & Research</h4>
                    <p className="text-sm text-gray-600">Graduates will engage in innovative research and development</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid gap-6">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        {program.name}
                      </span>
                      <Badge variant="secondary">{program.duration}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Intake: {program.intake} students</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faculty" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                    <p className="text-gray-600">Specialization: {member.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• 5G Communication Systems</li>
                    <li>• IoT and Wireless Sensor Networks</li>
                    <li>• VLSI Design for Low Power Applications</li>
                    <li>• Digital Signal Processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Smart Antenna Systems (2023)</li>
                    <li>• Image Processing for Medical Applications (2023)</li>
                    <li>• Embedded System Design (2022)</li>
                    <li>• Optical Communication Networks (2022)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="labs" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {labs.map((lab, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-purple-600" />
                      <span className="font-medium">{lab}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">National Conference on Communication Systems</h4>
                    <p className="text-sm text-gray-600">March 2024 - Two-day conference with industry experts</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Workshop on VLSI Design</h4>
                    <p className="text-sm text-gray-600">February 2024 - Hands-on workshop for students</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notable Alumni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold">Rohit Sharma (2018)</h4>
                    <p className="text-sm text-gray-600">Senior Engineer at Qualcomm, USA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Patel (2017)</h4>
                    <p className="text-sm text-gray-600">Lead Designer at Intel Corporation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentECE;
