import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DepartmentFaculty from '@/components/DepartmentFaculty';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, Users, GraduationCap, Award, BookOpen, Building, 
  Calendar, MapPin, Phone, Mail, Globe, ExternalLink,
  TrendingUp, Target, Lightbulb, Trophy, Star
} from 'lucide-react';

const DepartmentCSE = () => {
  const facultyData = {
    coordinator: [
      {
        name: 'Dr. Rajesh Kumar',
        designation: 'Professor & Head',
        specialization: 'Artificial Intelligence, Machine Learning',
        email: 'rajesh.kumar@uiet.puchd.ac.in',
        phone: '+91-172-2534820',
        office: 'Room 301, CSE Block',
        experience: '18 years',
        qualification: 'Ph.D in Computer Science',
        publications: 45,
        image: 'photo-1507003211169-0a1dd7228f2d',
        isCoordinator: true,
        researchAreas: ['AI/ML', 'Deep Learning', 'Computer Vision'],
        courses: ['Machine Learning', 'Artificial Intelligence', 'Data Structures']
      }
    ],
    professors: [
      {
        name: 'Dr. Priya Sharma',
        designation: 'Professor',
        specialization: 'Data Science, Big Data Analytics',
        email: 'priya.sharma@uiet.puchd.ac.in',
        phone: '+91-172-2534821',
        office: 'Room 302, CSE Block',
        experience: '15 years',
        qualification: 'Ph.D in Computer Science',
        publications: 42,
        image: 'photo-1494790108755-2616c34b009c',
        researchAreas: ['Data Science', 'Big Data', 'Analytics'],
        courses: ['Database Systems', 'Data Mining', 'Big Data Analytics']
      }
    ],
    associateProfessors: [
      {
        name: 'Dr. Amit Singh',
        designation: 'Associate Professor',
        specialization: 'Cybersecurity, Network Security',
        email: 'amit.singh@uiet.puchd.ac.in',
        phone: '+91-172-2534822',
        office: 'Room 203, CSE Block',
        experience: '12 years',
        qualification: 'Ph.D in Computer Science',
        publications: 35,
        image: 'photo-1472099645785-5658abf4ff4e',
        researchAreas: ['Cybersecurity', 'Network Security', 'Cryptography'],
        courses: ['Network Security', 'Cryptography', 'Computer Networks']
      },
      {
        name: 'Dr. Neha Verma',
        designation: 'Associate Professor',
        specialization: 'Software Engineering, HCI',
        email: 'neha.verma@uiet.puchd.ac.in',
        phone: '+91-172-2534823',
        office: 'Room 204, CSE Block',
        experience: '10 years',
        qualification: 'Ph.D in Computer Science',
        publications: 28,
        image: 'photo-1438761681033-6461ffad8d80',
        researchAreas: ['Software Engineering', 'HCI', 'UI/UX'],
        courses: ['Software Engineering', 'Human Computer Interaction', 'Web Development']
      }
    ],
    assistantProfessors: [
      {
        name: 'Dr. Rohit Gupta',
        designation: 'Assistant Professor',
        specialization: 'Cloud Computing, IoT',
        email: 'rohit.gupta@uiet.puchd.ac.in',
        phone: '+91-172-2534824',
        office: 'Room 105, CSE Block',
        experience: '8 years',
        qualification: 'Ph.D in Computer Science',
        publications: 22,
        image: 'photo-1560250097-0b93528c311a',
        researchAreas: ['Cloud Computing', 'IoT', 'Distributed Systems'],
        courses: ['Cloud Computing', 'Internet of Things', 'Operating Systems']
      },
      {
        name: 'Dr. Kavita Jain',
        designation: 'Assistant Professor',
        specialization: 'Computer Graphics, Image Processing',
        email: 'kavita.jain@uiet.puchd.ac.in',
        phone: '+91-172-2534825',
        office: 'Room 106, CSE Block',
        experience: '6 years',
        qualification: 'Ph.D in Computer Science',
        publications: 18,
        image: 'photo-1573496359142-b8d87734a5a2',
        researchAreas: ['Computer Graphics', 'Image Processing', 'Computer Vision'],
        courses: ['Computer Graphics', 'Image Processing', 'Multimedia Systems']
      }
    ],
    guestFaculty: [
      {
        name: 'Mr. Suresh Patel',
        designation: 'Guest Faculty',
        specialization: 'Industry Expert - Software Development',
        email: 'suresh.patel@uiet.puchd.ac.in',
        experience: '12 years (Industry)',
        qualification: 'M.Tech in Computer Science',
        publications: 5,
        image: 'photo-1519085360753-af0119f7cbe7',
        researchAreas: ['Software Development', 'Agile', 'DevOps'],
        courses: ['Software Project Management', 'Industry Practices']
      }
    ]
  };

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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Cpu className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Computer Science & Engineering</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Pioneering innovation in computing technology, artificial intelligence, and software engineering 
              to shape the digital future.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge className="bg-white/20 text-white border-white/30">NAAC A+ Accredited</Badge>
              <Badge className="bg-white/20 text-white border-white/30">NBA Accredited</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Industry Partnerships</Badge>
              <Badge className="bg-white/20 text-white border-white/30">100% Placement</Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <GraduationCap className="h-5 w-5 mr-2" />
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <BookOpen className="h-5 w-5 mr-2" />
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-8 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="labs">Labs</TabsTrigger>
            <TabsTrigger value="placements">Placements</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
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
            <DepartmentFaculty 
              departmentName="Computer Science & Engineering"
              facultyData={facultyData}
            />
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

          <TabsContent value="placements">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    Placement Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">100%</div>
                        <div className="text-sm text-gray-600">Placement Rate</div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Top Companies</h4>
                        <p className="text-sm text-gray-600">Google, Microsoft, Amazon</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">80%</div>
                        <div className="text-sm text-gray-600">Placement Package</div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Average Package</h4>
                        <p className="text-sm text-gray-600">$100,000</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

          <TabsContent value="contact">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">+91-172-2534820</div>
                        <div className="text-sm text-gray-600">Phone</div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-sm text-gray-600">info@uiet.puchd.ac.in</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">Punjab University</div>
                        <div className="text-sm text-gray-600">Address</div>
                      </div>
                      <div>
                        <h4 className="font-semibold">Website</h4>
                        <p className="text-sm text-gray-600"><a href="https://www.uiet.puchd.ac.in" target="_blank" rel="noopener noreferrer">www.uiet.puchd.ac.in</a></p>
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
