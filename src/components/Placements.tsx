
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Award, Building, DollarSign, MapPin, Calendar, Star } from 'lucide-react';

const Placements = () => {
  const placementStats = [
    { icon: TrendingUp, label: 'Placement Rate', value: '95%' },
    { icon: Users, label: 'Students Placed', value: '450+' },
    { icon: Building, label: 'Companies Visited', value: '120+' },
    { icon: DollarSign, label: 'Highest Package', value: '₹45 LPA' }
  ];

  const topRecruiters = [
    { name: 'Microsoft', logo: 'photo-1633409361618-c73427e4e206', offers: 25 },
    { name: 'Google', logo: 'photo-1573804633927-bfcbcd909acd', offers: 18 },
    { name: 'Amazon', logo: 'photo-1523474253046-8cd2748b5fd2', offers: 32 },
    { name: 'TCS', logo: 'photo-1560472355-536de3962603', offers: 45 },
    { name: 'Infosys', logo: 'photo-1560472354-b33ff0c44a43', offers: 38 },
    { name: 'Wipro', logo: 'photo-1560472354-b33ff0c44a43', offers: 28 },
    { name: 'Accenture', logo: 'photo-1560472355-536de3962603', offers: 35 },
    { name: 'Cognizant', logo: 'photo-1523474253046-8cd2748b5fd2', offers: 22 }
  ];

  const placementTrends = [
    { year: '2024', placed: 452, companies: 125, avgPackage: '12.5 LPA', highestPackage: '45 LPA' },
    { year: '2023', placed: 438, companies: 115, avgPackage: '11.8 LPA', highestPackage: '42 LPA' },
    { year: '2022', placed: 425, companies: 108, avgPackage: '10.5 LPA', highestPackage: '38 LPA' },
    { year: '2021', placed: 398, companies: 95, avgPackage: '9.8 LPA', highestPackage: '35 LPA' }
  ];

  const upcomingDrives = [
    {
      company: 'Microsoft',
      date: 'March 15, 2024',
      roles: ['Software Engineer', 'Product Manager'],
      package: '₹25-35 LPA',
      eligibility: 'B.Tech CSE/ECE',
      location: 'Bangalore'
    },
    {
      company: 'Goldman Sachs',
      date: 'March 20, 2024',
      roles: ['Technology Analyst'],
      package: '₹30-40 LPA',
      eligibility: 'B.Tech All branches',
      location: 'Mumbai'
    },
    {
      company: 'Adobe',
      date: 'March 25, 2024',
      roles: ['Software Development Engineer'],
      package: '₹28-38 LPA',
      eligibility: 'B.Tech CSE/IT',
      location: 'Noida'
    }
  ];

  const alumniSuccess = [
    {
      name: 'Rahul Sharma',
      batch: 'CSE 2022',
      company: 'Google',
      position: 'Software Engineer L4',
      package: '₹42 LPA',
      image: 'photo-1507003211169-0a1dd7228f2d'
    },
    {
      name: 'Priya Patel',
      batch: 'ECE 2023',
      company: 'Microsoft',
      position: 'Product Manager',
      package: '₹38 LPA',
      image: 'photo-1494790108755-2616c34b009c'
    },
    {
      name: 'Amit Kumar',
      batch: 'ME 2022',
      company: 'Tesla',
      position: 'Design Engineer',
      package: '₹35 LPA',
      image: 'photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Neha Singh',
      batch: 'BT 2023',
      company: 'Genentech',
      position: 'Research Scientist',
      package: '₹32 LPA',
      image: 'photo-1438761681033-6461ffad8d80'
    }
  ];

  const placementProcess = [
    {
      step: 1,
      title: 'Registration',
      description: 'Students register through placement portal'
    },
    {
      step: 2,
      title: 'Pre-placement Talk',
      description: 'Company presentation and role briefing'
    },
    {
      step: 3,
      title: 'Written Test',
      description: 'Technical and aptitude assessment'
    },
    {
      step: 4,
      title: 'Technical Interview',
      description: 'In-depth technical evaluation'
    },
    {
      step: 5,
      title: 'HR Interview',
      description: 'Cultural fit and behavioral assessment'
    },
    {
      step: 6,
      title: 'Final Selection',
      description: 'Offer letter and onboarding'
    }
  ];

  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Placements & Careers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Excellent Placement Record</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our students consistently secure positions at top companies with competitive packages, thanks to our industry-aligned curriculum and dedicated placement support.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <Card key={index} className="text-center bg-gradient-to-br from-white to-green-50 shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {topRecruiters.map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group bg-white">
                <CardContent className="p-4">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <img
                      src={`https://images.unsplash.com/${company.logo}?w=60&h=60&fit=crop`}
                      alt={company.name}
                      className="w-12 h-12 object-contain rounded"
                    />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{company.name}</h4>
                  <p className="text-xs text-green-600 font-medium">{company.offers} offers</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Placement Tabs */}
        <Tabs defaultValue="trends" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full lg:w-fit mx-auto mb-12 h-auto p-1 bg-white shadow-lg rounded-xl">
            <TabsTrigger value="trends" className="px-4 py-3 rounded-lg data-[state=active]:bg-green-600 data-[state=active]:text-white">Placement Trends</TabsTrigger>
            <TabsTrigger value="drives" className="px-4 py-3 rounded-lg data-[state=active]:bg-green-600 data-[state=active]:text-white">Upcoming Drives</TabsTrigger>
            <TabsTrigger value="success" className="px-4 py-3 rounded-lg data-[state=active]:bg-green-600 data-[state=active]:text-white">Success Stories</TabsTrigger>
            <TabsTrigger value="process" className="px-4 py-3 rounded-lg data-[state=active]:bg-green-600 data-[state=active]:text-white">Process</TabsTrigger>
          </TabsList>

          <TabsContent value="trends">
            <div className="space-y-6">
              {placementTrends.map((trend, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold text-slate-900">{trend.year}</h4>
                        <p className="text-slate-600 text-sm">Academic Year</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-green-600">{trend.placed}</div>
                        <div className="text-slate-600 text-sm">Students Placed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-blue-600">{trend.companies}</div>
                        <div className="text-slate-600 text-sm">Companies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-purple-600">{trend.avgPackage}</div>
                        <div className="text-slate-600 text-sm">Average Package</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-semibold text-orange-600">{trend.highestPackage}</div>
                        <div className="text-slate-600 text-sm">Highest Package</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drives">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingDrives.map((drive, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-slate-900">{drive.company}</CardTitle>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Open
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="font-medium">Date:</span>
                        <span className="ml-2 text-slate-600">{drive.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-green-500" />
                        <span className="font-medium">Location:</span>
                        <span className="ml-2 text-slate-600">{drive.location}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Roles:</span>
                        <span className="ml-2 text-slate-600">{drive.roles.join(', ')}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Package:</span>
                        <span className="ml-2 text-green-600 font-semibold">{drive.package}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Eligibility:</span>
                        <span className="ml-2 text-slate-600">{drive.eligibility}</span>
                      </div>
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="success">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumniSuccess.map((alum, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <img
                      src={`https://images.unsplash.com/${alum.image}?w=120&h=120&fit=crop&crop=face`}
                      alt={alum.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-green-100"
                    />
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{alum.name}</h4>
                    <p className="text-blue-600 font-semibold mb-1">{alum.position}</p>
                    <p className="text-slate-500 text-sm mb-2">{alum.company}</p>
                    <p className="text-slate-600 text-xs mb-2">{alum.batch}</p>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {alum.package}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placementProcess.map((step) => (
                <Card key={step.step} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join our placement preparation programs and get ready to land your dream job with top companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3">
                Placement Portal
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
                Career Guidance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
