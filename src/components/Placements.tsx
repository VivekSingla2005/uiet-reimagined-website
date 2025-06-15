
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Building, Award, Target, Star, Briefcase, DollarSign } from 'lucide-react';

const Placements = () => {
  const placementStats = [
    { icon: TrendingUp, label: 'Placement Rate', value: '95%', color: 'text-green-600' },
    { icon: DollarSign, label: 'Highest Package', value: '₹45 LPA', color: 'text-blue-600' },
    { icon: Users, label: 'Average Package', value: '₹12 LPA', color: 'text-purple-600' },
    { icon: Building, label: 'Companies Visited', value: '150+', color: 'text-orange-600' }
  ];

  const topRecruiters = [
    { name: 'Google', logo: 'Building', package: '₹45 LPA', hired: 5 },
    { name: 'Microsoft', logo: 'Building', package: '₹42 LPA', hired: 8 },
    { name: 'Amazon', logo: 'Building', package: '₹38 LPA', hired: 12 },
    { name: 'Flipkart', logo: 'Building', package: '₹35 LPA', hired: 10 },
    { name: 'Adobe', logo: 'Building', package: '₹40 LPA', hired: 6 },
    { name: 'Salesforce', logo: 'Building', package: '₹38 LPA', hired: 4 },
    { name: 'TCS', logo: 'Building', package: '₹8 LPA', hired: 45 },
    { name: 'Infosys', logo: 'Building', package: '₹7.5 LPA', hired: 40 }
  ];

  const placementTrends = [
    { year: '2024', placed: 425, total: 450, percentage: 94.4, avgPackage: 12.5 },
    { year: '2023', placed: 410, total: 430, percentage: 95.3, avgPackage: 11.8 },
    { year: '2022', placed: 395, total: 420, percentage: 94.0, avgPackage: 10.2 },
    { year: '2021', placed: 380, total: 400, percentage: 95.0, avgPackage: 9.8 }
  ];

  const departmentWise = [
    { department: 'Computer Science & Engineering', placed: 58, total: 60, percentage: 96.7, avgPackage: 18.5 },
    { department: 'Electronics & Communication', placed: 55, total: 60, percentage: 91.7, avgPackage: 12.2 },
    { department: 'Mechanical Engineering', placed: 52, total: 60, percentage: 86.7, avgPackage: 8.5 },
    { department: 'Civil Engineering', placed: 25, total: 30, percentage: 83.3, avgPackage: 7.2 },
    { department: 'Biotechnology', placed: 27, total: 30, percentage: 90.0, avgPackage: 9.8 }
  ];

  const placementProcess = [
    {
      step: '1',
      title: 'Registration',
      description: 'Students register for placement process with complete profile and academic records.'
    },
    {
      step: '2',
      title: 'Pre-placement Training',
      description: 'Comprehensive training on aptitude, technical skills, communication, and interview preparation.'
    },
    {
      step: '3',
      title: 'Company Selection',
      description: 'Students apply to companies based on eligibility criteria and job profiles.'
    },
    {
      step: '4',
      title: 'Assessment Rounds',
      description: 'Online tests, group discussions, technical interviews, and HR interviews.'
    },
    {
      step: '5',
      title: 'Final Selection',
      description: 'Offer letters issued to selected candidates with joining details.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Career Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Exceptional Placement Record</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated placement cell ensures students secure rewarding careers with top companies across various industries through comprehensive training and industry partnerships.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Placement Tabs */}
        <Tabs defaultValue="recruiters" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-4 mb-8 h-auto p-1">
            <TabsTrigger value="recruiters" className="px-4 py-3 text-sm">Top Recruiters</TabsTrigger>
            <TabsTrigger value="trends" className="px-4 py-3 text-sm">Placement Trends</TabsTrigger>
            <TabsTrigger value="departments" className="px-4 py-3 text-sm">Department-wise</TabsTrigger>
            <TabsTrigger value="process" className="px-4 py-3 text-sm">Process</TabsTrigger>
          </TabsList>

          <TabsContent value="recruiters">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRecruiters.map((recruiter, index) => (
                <Card key={index} className="bg-white shadow-md border-0 hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{recruiter.name}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="text-green-600 font-semibold">Highest: {recruiter.package}</div>
                      <div className="text-slate-600">Hired: {recruiter.hired} students</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="space-y-6">
              {placementTrends.map((trend, index) => (
                <Card key={index} className="bg-white shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-xl font-semibold text-slate-900">Academic Year {trend.year}</h4>
                        <p className="text-slate-600">Placement Statistics</p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-slate-900">{trend.placed}</div>
                          <div className="text-sm text-slate-600">Students Placed</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-slate-900">{trend.total}</div>
                          <div className="text-sm text-slate-600">Total Students</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">{trend.percentage}%</div>
                          <div className="text-sm text-slate-600">Placement Rate</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-600">₹{trend.avgPackage} LPA</div>
                          <div className="text-sm text-slate-600">Avg Package</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="departments">
            <div className="space-y-4">
              {departmentWise.map((dept, index) => (
                <Card key={index} className="bg-white shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                      <div className="mb-4 lg:mb-0">
                        <h4 className="text-lg font-semibold text-slate-900">{dept.department}</h4>
                        <p className="text-slate-600 text-sm">Academic Year 2024</p>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-base font-bold text-slate-900">{dept.placed}/{dept.total}</div>
                          <div className="text-sm text-slate-600">Placed/Total</div>
                        </div>
                        <div>
                          <div className="text-base font-bold text-green-600">{dept.percentage}%</div>
                          <div className="text-sm text-slate-600">Success Rate</div>
                        </div>
                        <div>
                          <div className="text-base font-bold text-blue-600">₹{dept.avgPackage} LPA</div>
                          <div className="text-sm text-slate-600">Avg Package</div>
                        </div>
                        <div>
                          <Star className="h-5 w-5 text-yellow-500 mx-auto" />
                          <div className="text-sm text-slate-600">Excellence</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-6">
              {placementProcess.map((step, index) => (
                <Card key={index} className="bg-white shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Training Programs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Pre-Placement Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Technical Skills',
                icon: Briefcase,
                features: ['Programming Languages', 'System Design', 'Database Management', 'Web Technologies']
              },
              {
                title: 'Soft Skills',
                icon: Users,
                features: ['Communication Skills', 'Leadership Training', 'Team Building', 'Presentation Skills']
              },
              {
                title: 'Interview Preparation',
                icon: Target,
                features: ['Mock Interviews', 'HR Round Practice', 'Group Discussions', 'Resume Building']
              }
            ].map((program, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <program.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-slate-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join UIET and benefit from our strong industry connections, comprehensive training programs, and exceptional placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3">
                View Placement Brochure
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3">
                Contact Placement Cell
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
