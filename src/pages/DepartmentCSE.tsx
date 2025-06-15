
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Computer, Users, BookOpen, Award, Flask, Calendar, Trophy, FileText } from 'lucide-react';

const DepartmentCSE = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Department Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container-modern">
          <div className="text-center">
            <Computer className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Computer Science & Engineering</h1>
            <p className="text-xl text-blue-100">Leading innovation in software development, AI, and emerging technologies</p>
          </div>
        </div>
      </section>

      <div className="container-modern py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-8 w-full mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="labs">Labs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>To be a globally recognized department that produces world-class computer science engineers and researchers who contribute to technological advancement and societal development.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Provide quality education in computer science and engineering</li>
                    <li>Foster innovation and research culture</li>
                    <li>Develop ethical and socially responsible engineers</li>
                    <li>Maintain strong industry-academia collaboration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Program Educational Objectives (PEOs)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">PEO 1: Technical Excellence</h4>
                    <p>Graduates will demonstrate technical competence in computer science and engineering</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">PEO 2: Professional Skills</h4>
                    <p>Graduates will exhibit leadership, teamwork, and communication skills</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">PEO 3: Lifelong Learning</h4>
                    <p>Graduates will engage in continuous learning and professional development</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">PEO 4: Social Responsibility</h4>
                    <p>Graduates will demonstrate ethical behavior and social responsibility</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academics">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Programs Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">B.E. Computer Science</h4>
                      <p className="text-sm text-gray-600">4-year undergraduate program</p>
                      <p className="text-sm font-medium">Intake: 60 students</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">M.E. Computer Science</h4>
                      <p className="text-sm text-gray-600">2-year postgraduate program</p>
                      <p className="text-sm font-medium">Intake: 18 students</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Ph.D Computer Science</h4>
                      <p className="text-sm text-gray-600">Research program</p>
                      <p className="text-sm font-medium">Variable intake</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Core Subjects</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Data Structures and Algorithms</li>
                        <li>• Computer Organization</li>
                        <li>• Operating Systems</li>
                        <li>• Database Management Systems</li>
                        <li>• Computer Networks</li>
                        <li>• Software Engineering</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Specialization Areas</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Artificial Intelligence</li>
                        <li>• Machine Learning</li>
                        <li>• Cybersecurity</li>
                        <li>• Web Development</li>
                        <li>• Mobile Computing</li>
                        <li>• Cloud Computing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faculty">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Dr. Rajesh Kumar', designation: 'Professor & Head', specialization: 'AI & Machine Learning' },
                { name: 'Dr. Priya Sharma', designation: 'Associate Professor', specialization: 'Database Systems' },
                { name: 'Dr. Amit Singh', designation: 'Assistant Professor', specialization: 'Computer Networks' },
                { name: 'Dr. Neha Gupta', designation: 'Assistant Professor', specialization: 'Software Engineering' },
                { name: 'Dr. Suresh Patel', designation: 'Associate Professor', specialization: 'Cybersecurity' },
                { name: 'Dr. Kavita Rani', designation: 'Assistant Professor', specialization: 'Data Mining' }
              ].map((faculty, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-blue-600" />
                    </div>
                    <h4 className="font-semibold">{faculty.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{faculty.designation}</p>
                    <p className="text-xs text-blue-600">{faculty.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Research Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'AI-based Healthcare Diagnosis System',
                      'Blockchain for Secure Data Management',
                      'IoT Security Framework',
                      'Natural Language Processing for Regional Languages'
                    ].map((project, index) => (
                      <div key={index} className="p-4 border-l-4 border-blue-500 bg-blue-50">
                        <h4 className="font-semibold">{project}</h4>
                        <p className="text-sm text-gray-600 mt-1">Funded by DST/CSIR • Duration: 2023-2026</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      'Smart City Traffic Management System',
                      'Educational Data Mining Platform',
                      'Cloud-based E-governance Solution'
                    ].map((project, index) => (
                      <div key={index} className="p-4 border-l-4 border-green-500 bg-green-50">
                        <h4 className="font-semibold">{project}</h4>
                        <p className="text-sm text-gray-600 mt-1">Completed in 2023 • Impact: 500+ users</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="labs">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Programming Lab', capacity: '60 systems', software: 'Visual Studio, Eclipse, PyCharm' },
                { name: 'Network Lab', capacity: '30 systems', software: 'Cisco Packet Tracer, Wireshark' },
                { name: 'AI/ML Lab', capacity: '40 systems', software: 'TensorFlow, PyTorch, R' },
                { name: 'Database Lab', capacity: '50 systems', software: 'Oracle, MySQL, MongoDB' }
              ].map((lab, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Flask className="h-5 w-5 mr-2" />
                      {lab.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">Capacity: {lab.capacity}</p>
                    <p className="text-sm">Software: {lab.software}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-6">
              {[
                { name: 'TechFest 2024', date: 'March 15-17, 2024', description: 'Annual technical festival with coding competitions' },
                { name: 'AI Workshop', date: 'February 20, 2024', description: 'Hands-on workshop on machine learning' },
                { name: 'Industry Talk Series', date: 'Monthly', description: 'Guest lectures by industry experts' }
              ].map((event, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Calendar className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold">{event.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                        <p className="text-sm">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Rahul Verma', batch: '2020', company: 'Google', position: 'Software Engineer' },
                { name: 'Priya Patel', batch: '2019', company: 'Microsoft', position: 'Product Manager' },
                { name: 'Amit Sharma', batch: '2018', company: 'Amazon', position: 'SDE-II' }
              ].map((alumni, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold">{alumni.name}</h4>
                    <p className="text-sm text-gray-600">Batch: {alumni.batch}</p>
                    <p className="text-sm text-blue-600">{alumni.position}</p>
                    <p className="text-sm font-medium">{alumni.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Academic Excellence</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• NBA Accreditation (2023)</li>
                        <li>• Best Department Award (2022)</li>
                        <li>• 100% Placement Record (2023)</li>
                        <li>• 50+ Research Publications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Student Achievements</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• ACM ICPC Finalists (2023)</li>
                        <li>• Google Summer of Code (5 students)</li>
                        <li>• National Level Hackathon Winners</li>
                        <li>• Patent Applications Filed (8)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentCSE;
