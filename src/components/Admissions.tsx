
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, FileText, Users, GraduationCap, CheckCircle, AlertCircle, Clock, CreditCard, Globe, Trophy } from 'lucide-react';

const Admissions = () => {
  const admissionSchedule = [
    {
      program: 'B.E. (Latest Year)',
      applicationStart: 'March 1, 2024',
      applicationEnd: 'May 15, 2024',
      examDate: 'June 10, 2024',
      resultsDate: 'July 5, 2024',
      seats: 420,
      eligibility: 'JEE Main qualified'
    },
    {
      program: 'M.E./M.Tech (Latest Year)',
      applicationStart: 'March 15, 2024',
      applicationEnd: 'May 30, 2024',
      examDate: 'June 20, 2024',
      resultsDate: 'July 15, 2024',
      seats: 126,
      eligibility: 'GATE qualified'
    },
    {
      program: 'Ph.D (Doctor of Philosophy)',
      applicationStart: 'January 1, 2024',
      applicationEnd: 'March 31, 2024',
      examDate: 'April 25, 2024',
      resultsDate: 'May 20, 2024',
      seats: 35,
      eligibility: 'NET/GATE/JRF'
    },
    {
      program: 'NRI/Foreign Admissions',
      applicationStart: 'February 1, 2024',
      applicationEnd: 'June 15, 2024',
      examDate: 'Direct Admission',
      resultsDate: 'July 1, 2024',
      seats: 21,
      eligibility: 'International qualifications'
    }
  ];

  const specialAdmissions = [
    {
      name: 'Sports Quota',
      icon: Trophy,
      description: 'Special admission for outstanding sports persons',
      seats: '5% of total seats',
      requirements: ['State/National level sports certificate', 'Academic eligibility', 'Sports trial'],
      process: 'Merit-based selection with sports achievements consideration'
    },
    {
      name: 'PUMEET',
      icon: GraduationCap,
      description: 'Panjab University Management Entrance Examination Test',
      seats: 'Variable',
      requirements: ['Bachelor\'s degree', 'PUMEET qualification', 'Group discussion & interview'],
      process: 'Written test followed by GD-PI rounds'
    },
    {
      name: 'PULEET',
      icon: Users,
      description: 'Panjab University Law Entrance Examination Test',
      seats: 'Variable',
      requirements: ['10+2 or graduation', 'PULEET qualification', 'English proficiency'],
      process: 'Written examination and merit-based selection'
    }
  ];

  const eligibilityCriteria = {
    be: [
      'Passed 10+2 with PCM subjects',
      'Minimum 60% marks (55% for reserved)',
      'Valid JEE Main score',
      'Age limit: 25 years (relaxable)',
      'Medical fitness certificate'
    ],
    me: [
      'B.E./B.Tech in relevant discipline',
      'Minimum 60% marks or 6.5 CGPA',
      'Valid GATE score',
      'No age limit',
      'Work experience (preferred)'
    ],
    phd: [
      'M.E./M.Tech/M.Sc. in relevant field',
      'Minimum 60% marks or 6.5 CGPA',
      'NET/GATE/JRF qualification',
      'Research proposal submission',
      'Interview clearing mandatory'
    ],
    nri: [
      'International qualification equivalent',
      'English proficiency (IELTS/TOEFL)',
      'Financial capability certificate',
      'Visa documentation',
      'Medical clearance'
    ]
  };

  const applicationProcess = [
    {
      step: 1,
      title: 'Online Registration',
      description: 'Create account on admission portal',
      icon: Users
    },
    {
      step: 2,
      title: 'Fill Application',
      description: 'Complete application form with details',
      icon: FileText
    },
    {
      step: 3,
      title: 'Upload Documents',
      description: 'Upload required certificates',
      icon: CheckCircle
    },
    {
      step: 4,
      title: 'Pay Fees',
      description: 'Pay application fee online',
      icon: CreditCard
    },
    {
      step: 5,
      title: 'Submit Application',
      description: 'Review and submit application',
      icon: Clock
    },
    {
      step: 6,
      title: 'Admit Card',
      description: 'Download admit card',
      icon: GraduationCap
    }
  ];

  const feeStructure = [
    { program: 'B.E. (per year)', tuition: '₹1,20,000', hostel: '₹45,000', other: '₹15,000', total: '₹1,80,000' },
    { program: 'M.E./M.Tech (per year)', tuition: '₹80,000', hostel: '₹45,000', other: '₹12,000', total: '₹1,37,000' },
    { program: 'Ph.D (per year)', tuition: '₹30,000', hostel: '₹45,000', other: '₹8,000', total: '₹83,000' },
    { program: 'NRI/Foreign (per year)', tuition: '$5,000', hostel: '$1,200', other: '$300', total: '$6,500' }
  ];

  return (
    <section id="admissions" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Admissions 2024
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Join UIET Family</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Begin your journey towards excellence in engineering education. Multiple admission pathways available.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600 mb-1">602</div>
              <div className="text-slate-600 text-sm">Total Seats</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-slate-600 text-sm">Placement Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-600 mb-1">₹45 LPA</div>
              <div className="text-slate-600 text-sm">Highest Package</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-orange-600 mb-1">22+</div>
              <div className="text-slate-600 text-sm">Years Legacy</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="schedule" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full lg:w-fit mx-auto mb-8 bg-white shadow-sm">
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="special">Special</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <div className="space-y-6">
              {admissionSchedule.map((schedule, index) => (
                <Card key={index} className="border-0 shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-slate-900">{schedule.program}</h3>
                        <p className="text-slate-600 text-sm">{schedule.seats} seats</p>
                        <p className="text-blue-600 text-xs">{schedule.eligibility}</p>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">App Start</div>
                        <div className="text-blue-600 text-sm">{schedule.applicationStart}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">App End</div>
                        <div className="text-red-600 text-sm">{schedule.applicationEnd}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">Exam</div>
                        <div className="text-purple-600 text-sm">{schedule.examDate}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-slate-900">Results</div>
                        <div className="text-green-600 text-sm">{schedule.resultsDate}</div>
                      </div>
                      <div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="special">
            <div className="grid gap-6">
              {specialAdmissions.map((admission, index) => (
                <Card key={index} className="border-0 shadow-md bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <admission.icon className="h-6 w-6 mr-3 text-blue-600" />
                      {admission.name}
                    </CardTitle>
                    <p className="text-gray-600">{admission.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Available Seats</h4>
                        <p className="text-blue-600 font-medium">{admission.seats}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="text-sm space-y-1">
                          {admission.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Selection Process</h4>
                        <p className="text-sm text-gray-600">{admission.process}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="eligibility">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(eligibilityCriteria).map(([program, criteria]) => (
                <Card key={program} className="border-0 shadow-md bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900 capitalize">
                      {program === 'be' ? 'B.E.' : program === 'me' ? 'M.E./M.Tech' : program === 'phd' ? 'Ph.D' : 'NRI/Foreign'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationProcess.map((step) => (
                <Card key={step.step} className="text-center border-0 shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fees">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="pb-3 text-slate-900 font-semibold">Program</th>
                        <th className="pb-3 text-slate-900 font-semibold">Tuition Fee</th>
                        <th className="pb-3 text-slate-900 font-semibold">Hostel Fee</th>
                        <th className="pb-3 text-slate-900 font-semibold">Other Charges</th>
                        <th className="pb-3 text-slate-900 font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className="border-b border-slate-100">
                          <td className="py-3 font-medium text-slate-900">{fee.program}</td>
                          <td className="py-3 text-slate-600">{fee.tuition}</td>
                          <td className="py-3 text-slate-600">{fee.hostel}</td>
                          <td className="py-3 text-slate-600">{fee.other}</td>
                          <td className="py-3 font-semibold text-green-600">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>* Fees are subject to revision as per university guidelines</p>
                  <p>* Additional fees may apply for special programs and facilities</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Multiple admission pathways available. Choose the one that best fits your background and aspirations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8 py-3">
                  Start Application
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
