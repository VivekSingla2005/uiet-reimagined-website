import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, BookOpen, Target, Award, Beaker, Calendar, GraduationCap, Code } from 'lucide-react';

const DepartmentCSE = () => {
  const faculty = [
    { name: 'Dr. Rajesh Kumar', designation: 'Professor & HOD', specialization: 'Machine Learning, AI', experience: '20 years' },
    { name: 'Dr. Priya Sharma', designation: 'Associate Professor', specialization: 'Data Structures, Algorithms', experience: '15 years' },
    { name: 'Dr. Amit Singh', designation: 'Assistant Professor', specialization: 'Computer Networks, IoT', experience: '10 years' },
    { name: 'Dr. Neha Gupta', designation: 'Assistant Professor', specialization: 'Software Engineering, Web Tech', experience: '8 years' }
  ];

  const labs = [
    { name: 'Programming Lab', systems: 60, software: 'Dev-C++, Eclipse, Visual Studio' },
    { name: 'Database Lab', systems: 40, software: 'Oracle, MySQL, MongoDB' },
    { name: 'Network Lab', systems: 30, software: 'Cisco Packet Tracer, Wireshark' },
    { name: 'AI/ML Lab', systems: 25, software: 'Python, R, TensorFlow, Jupyter' }
  ];

  const programs = [
    { degree: 'B.Tech CSE', duration: '4 years', intake: 120, eligibility: '10+2 with PCM' },
    { degree: 'M.Tech CSE', duration: '2 years', intake: 30, eligibility: 'B.Tech in CSE/IT' },
    { degree: 'Ph.D CSE', duration: '3-5 years', intake: 10, eligibility: 'M.Tech with valid GATE/NET' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Department Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container-modern">
          <div className="text-center">
            <Code className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Computer Science & Engineering</h1>
            <p className="text-xl text-blue-100">
              Pioneering innovation in computing technologies and software development
            </p>
          </div>
        </div>
      </section>

      <div className="container-modern py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 h-auto p-1">
            <TabsTrigger value="overview" className="px-3 py-2 text-xs">Overview</TabsTrigger>
            <TabsTrigger value="programs" className="px-3 py-2 text-xs">Programs</TabsTrigger>
            <TabsTrigger value="faculty" className="px-3 py-2 text-xs">Faculty</TabsTrigger>
            <TabsTrigger value="research" className="px-3 py-2 text-xs">Research</TabsTrigger>
            <TabsTrigger value="labs" className="px-3 py-2 text-xs">Labs</TabsTrigger>
            <TabsTrigger value="events" className="px-3 py-2 text-xs">Events</TabsTrigger>
            <TabsTrigger value="alumni" className="px-3 py-2 text-xs">Alumni</TabsTrigger>
            <TabsTrigger value="achievements" className="px-3 py-2 text-xs">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-blue-600" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be a globally recognized department of excellence in computer science and engineering education, 
                    research, and innovation that contributes to societal development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To provide quality education in computer science and engineering through innovative curriculum, 
                    cutting-edge research, and industry collaboration while fostering ethical and professional values.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Program Educational Objectives (PEOs)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">1</div>
                    <p className="text-gray-600">Graduates will demonstrate technical competence in computer science and engineering fundamentals.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">2</div>
                    <p className="text-gray-600">Graduates will exhibit problem-solving skills and innovative thinking in their professional careers.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">3</div>
                    <p className="text-gray-600">Graduates will demonstrate effective communication, teamwork, and leadership skills.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-semibold mt-0.5">4</div>
                    <p className="text-gray-600">Graduates will engage in lifelong learning and professional development.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs">
            <div className="space-y-6">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{program.degree}</h3>
                        <p className="text-sm text-gray-600">Duration: {program.duration}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{program.intake}</div>
                        <div className="text-sm text-gray-600">Intake</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Eligibility</div>
                        <div className="font-medium">{program.eligibility}</div>
                      </div>
                      <div className="text-right">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                          View Syllabus
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faculty">
            <div className="grid md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-blue-600 font-medium">{member.designation}</p>
                        <p className="text-sm text-gray-600 mt-1">{member.specialization}</p>
                        <p className="text-sm text-gray-500">{member.experience}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Beaker className="h-5 w-5 mr-2 text-green-600" />
                    Ongoing Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">AI-based Healthcare Solutions</h4>
                      <p className="text-sm text-gray-600">Dr. Rajesh Kumar - Funded by DST</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">IoT Security Framework</h4>
                      <p className="text-sm text-gray-600">Dr. Amit Singh - Industry Collaboration</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Blockchain for Supply Chain</h4>
                      <p className="text-sm text-gray-600">Dr. Neha Gupta - UGC Funded</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    Completed Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Machine Learning in Agriculture</h4>
                      <p className="text-sm text-gray-600">2023 - Published in IEEE Journal</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Cloud Computing Security</h4>
                      <p className="text-sm text-gray-600">2022 - Patent Filed</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Data Mining Techniques</h4>
                      <p className="text-sm text-gray-600">2021 - Best Paper Award</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="labs">
            <div className="grid md:grid-cols-2 gap-6">
              {labs.map((lab, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{lab.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Systems:</span>
                        <span className="font-semibold">{lab.systems}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Software: </span>
                        <span className="text-sm">{lab.software}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">15</div>
                        <div className="text-sm text-gray-600">JAN</div>
                      </div>
                      <div>
                        <h4 className="font-semibold">AI Workshop</h4>
                        <p className="text-sm text-gray-600">Introduction to Machine Learning</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">22</div>
                        <div className="text-sm text-gray-600">JAN</div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Tech Symposium</h4>
                        <p className="text-sm text-gray-600">Latest trends in Computer Science</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Rahul Sharma', batch: '2020', company: 'Google', position: 'Software Engineer' },
                { name: 'Priya Gupta', batch: '2019', company: 'Microsoft', position: 'Senior Developer' },
                { name: 'Amit Kumar', batch: '2018', company: 'Amazon', position: 'Tech Lead' }
              ].map((alumni, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-gray-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                    <p className="text-blue-600">{alumni.position}</p>
                    <p className="text-sm text-gray-600">{alumni.company}</p>
                    <p className="text-xs text-gray-500">Batch of {alumni.batch}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-yellow-600" />
                    Department Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Best Department Award 2023</h4>
                        <p className="text-sm text-gray-600">Recognized by Panjab University for excellence in academics and research</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">5 Patents Filed in 2023</h4>
                        <p className="text-sm text-gray-600">Faculty and students filed patents in AI, IoT, and Blockchain domains</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">100% Placement Record</h4>
                        <p className="text-sm text-gray-600">All eligible students placed in top companies with excellent packages</p>
                      </div>
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
