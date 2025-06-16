
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, GraduationCap, Users, Calendar, Trophy, MapPin, 
  Phone, Mail, Globe, Award, Heart, Target, Eye, Lightbulb,
  School, BookOpen, Cpu, Building2, TreePine, Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { label: 'Students', value: '2,500+', icon: Users },
    { label: 'Faculty', value: '150+', icon: GraduationCap },
    { label: 'Departments', value: '7', icon: Building },
    { label: 'Years of Excellence', value: '25+', icon: Calendar }
  ];

  const infrastructure = [
    { name: 'Smart Classrooms', count: '50+', icon: School },
    { name: 'Research Labs', count: '25+', icon: Cpu },
    { name: 'Library & Digital Resources', count: '1 Central', icon: BookOpen },
    { name: 'Hostels', count: '4 Blocks', icon: Building2 },
    { name: 'Sports Facilities', count: '10+', icon: Trophy },
    { name: 'Green Campus Area', count: '50 Acres', icon: TreePine }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="uiet" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Building className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">University Institute of Engineering & Technology</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
              A premier engineering institution under Panjab University, committed to excellence in 
              technical education, research, and innovation since 1999.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">NAAC A+ Accredited</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">NBA Accredited</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">NIRF Ranked</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pu">Panjab University</TabsTrigger>
            <TabsTrigger value="chandigarh">Chandigarh</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="director">Director's Message</TabsTrigger>
            <TabsTrigger value="mission">Vision & Mission</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* About UIET */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-6 w-6 mr-2" />
                    About UIET
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    University Institute of Engineering & Technology (UIET), established in 1999, 
                    is a constituent college of Panjab University. It has emerged as one of the 
                    leading engineering institutions in North India.
                  </p>
                  <p className="text-gray-700">
                    UIET offers undergraduate and postgraduate programs in various engineering 
                    disciplines with a focus on industry-relevant curriculum, hands-on learning, 
                    and research excellence.
                  </p>
                  <Link to="/about/pu">
                    <Button variant="outline" size="sm">Learn More About PU</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                      <span className="text-gray-700">Consistently ranked among top engineering colleges</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                      <span className="text-gray-700">100% placement record for eligible students</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                      <span className="text-gray-700">Strong industry partnerships and collaborations</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-yellow-600 mt-0.5" />
                      <span className="text-gray-700">State-of-the-art laboratories and facilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pu" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-6 w-6 mr-2" />
                  Panjab University
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Panjab University, established in 1882, is one of the oldest universities in India. 
                  Originally founded in Lahore, it was re-established in India after partition and 
                  moved to Chandigarh in 1956.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Facts</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Established: 1882</li>
                      <li>• NAAC A+ Accredited</li>
                      <li>• 75+ Departments</li>
                      <li>• 15,000+ Students</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Recognition</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Category-I University</li>
                      <li>• UGC Recognition</li>
                      <li>• NIRF Ranked</li>
                      <li>• International Collaborations</li>
                    </ul>
                  </div>
                </div>
                <Link to="/about/pu">
                  <Button className="mt-4">Explore Panjab University</Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chandigarh" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  About Chandigarh
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Chandigarh, known as "The City Beautiful," is a Union Territory and serves as the 
                  capital of Punjab and Haryana. Designed by the famous architect Le Corbusier, 
                  it's renowned for its urban planning and modern architecture.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Educational Hub</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Premier educational institutions</li>
                      <li>• Research and innovation centers</li>
                      <li>• Excellent academic environment</li>
                      <li>• Student-friendly infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Quality of Life</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Planned city with green spaces</li>
                      <li>• Safe and secure environment</li>
                      <li>• Modern healthcare facilities</li>
                      <li>• Cultural and recreational venues</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-6 w-6 mr-2" />
                  Campus Location & Facilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Campus Address</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium">
                        University Institute of Engineering & Technology<br/>
                        Panjab University<br/>
                        Sector 25, Chandigarh - 160014<br/>
                        India
                      </p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">+91-172-2534816</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">info@uiet.puchd.ac.in</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">www.uiet.puchd.ac.in</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Campus Features</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Sprawling 50-acre green campus</li>
                      <li>• Modern academic buildings</li>
                      <li>• State-of-the-art laboratories</li>
                      <li>• Central library with digital resources</li>
                      <li>• Sports complex and playgrounds</li>
                      <li>• Separate hostels for boys and girls</li>
                      <li>• Cafeteria and dining facilities</li>
                      <li>• 24/7 security and medical facilities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="director" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 mr-2" />
                  Director's Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prof. (Dr.) Rajesh Kumar</h3>
                      <p className="text-blue-600 font-medium mb-4">Director, UIET</p>
                      <blockquote className="text-gray-700 italic">
                        "Welcome to UIET, where we nurture engineering minds to become tomorrow's innovators. 
                        Our commitment to academic excellence, research, and holistic development ensures that 
                        our graduates are well-prepared to meet global challenges and contribute meaningfully 
                        to society."
                      </blockquote>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Academic Vision</h4>
                      <p className="text-sm text-gray-600">
                        Fostering innovation-driven education with industry-relevant curriculum and 
                        hands-on learning experiences.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Research Focus</h4>
                      <p className="text-sm text-gray-600">
                        Promoting cutting-edge research in emerging technologies and sustainable 
                        solutions for societal challenges.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mission" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    To be a globally recognized center of excellence in engineering education, 
                    research, and innovation, producing competent engineers and leaders who 
                    contribute to technological advancement and societal development.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Key Aspirations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Global recognition and rankings</li>
                      <li>• Industry leadership development</li>
                      <li>• Sustainable innovation focus</li>
                      <li>• International collaborations</li>
                    </ul>
                  </div>
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
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Provide quality engineering education with emphasis on practical learning</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Foster research and innovation in emerging technologies</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Develop ethical, socially responsible engineers</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Build strong industry-academia partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 mr-2 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span>Promote entrepreneurship and innovation culture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <Card>
              <CardHeader>
                <CardTitle>Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Excellence</h4>
                    <p className="text-sm text-gray-600">Striving for the highest standards in education and research</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Innovation</h4>
                    <p className="text-sm text-gray-600">Encouraging creative thinking and technological advancement</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-2">Integrity</h4>
                    <p className="text-sm text-gray-600">Upholding ethical standards and moral values</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {infrastructure.map((facility, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <facility.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                    <h3 className="font-semibold text-lg mb-2">{facility.name}</h3>
                    <p className="text-blue-600 font-medium">{facility.count}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Academic Infrastructure</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Air-conditioned smart classrooms with modern AV equipment</li>
                      <li>• Advanced research laboratories for each department</li>
                      <li>• Central library with 50,000+ books and digital resources</li>
                      <li>• High-speed internet connectivity throughout campus</li>
                      <li>• Conference halls and seminar rooms</li>
                      <li>• Computer centers with latest hardware and software</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Student Facilities</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Separate hostels for boys and girls with Wi-Fi</li>
                      <li>• Cafeteria and mess facilities</li>
                      <li>• Sports complex with indoor and outdoor facilities</li>
                      <li>• Medical center with qualified staff</li>
                      <li>• Transportation facilities</li>
                      <li>• Student activity centers and clubs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
