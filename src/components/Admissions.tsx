import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, FileText, CreditCard, CheckCircle, AlertCircle, Download, Upload } from 'lucide-react';

const Admissions = () => {
  const admissionProcess = [
    {
      step: 1,
      title: 'Online Application',
      description: 'Fill out the online application form with required details',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Upload',
      description: 'Upload all required documents and certificates',
      icon: Upload
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Pay the application fee through online portal',
      icon: CreditCard
    },
    {
      step: 4,
      title: 'Merit List',
      description: 'Check merit list and counseling schedule',
      icon: CheckCircle
    }
  ];

  const importantDates = [
    { event: 'Application Start Date', date: 'April 15, 2024' },
    { event: 'Application Last Date', date: 'June 30, 2024' },
    { event: 'Merit List Release', date: 'July 15, 2024' },
    { event: 'Counseling Starts', date: 'July 20, 2024' },
    { event: 'Classes Begin', date: 'August 15, 2024' }
  ];

  const eligibilityCriteria = {
    undergraduate: [
      'Passed 10+2 with Physics, Chemistry, and Mathematics',
      'Minimum 75% marks in 10+2 (70% for SC/ST)',
      'Valid JEE Main score',
      'Age limit: 25 years (30 for SC/ST)'
    ],
    postgraduate: [
      'Bachelor\'s degree in relevant engineering field',
      'Minimum 60% marks in graduation (55% for SC/ST)',
      'Valid GATE score (for M.Tech programs)',
      'Valid CAT/MAT score (for MBA program)'
    ],
    doctoral: [
      'Master\'s degree in relevant field',
      'Minimum 60% marks in post-graduation',
      'Valid NET/GATE score or equivalent',
      'Research proposal and interview'
    ]
  };

  const feeStructure = {
    undergraduate: {
      tuition: '₹1,50,000',
      hostel: '₹60,000',
      mess: '₹40,000',
      other: '₹20,000',
      total: '₹2,70,000'
    },
    postgraduate: {
      tuition: '₹2,00,000',
      hostel: '₹60,000',
      mess: '₹40,000',
      other: '₹25,000',
      total: '₹3,25,000'
    }
  };

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join UIET and embark on your journey towards engineering excellence. 
            Find all information about admission process, eligibility, and important dates.
          </p>
        </div>

        {/* Important Dates Alert */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-12">
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800">Admission Open for 2024-25</h3>
              <p className="text-yellow-700">Application deadline: June 30, 2024. Apply now to secure your seat!</p>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Admission Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {admissionProcess.map((step) => (
              <Card key={step.step} className="text-center relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <step.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
                {step.step < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Eligibility & Fee Structure */}
        <Tabs defaultValue="eligibility" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="eligibility" className="px-8">Eligibility Criteria</TabsTrigger>
            <TabsTrigger value="fees" className="px-8">Fee Structure</TabsTrigger>
          </TabsList>

          <TabsContent value="eligibility">
            <div className="grid lg:grid-cols-3 gap-6">
              {Object.entries(eligibilityCriteria).map(([level, criteria]) => (
                <Card key={level}>
                  <CardHeader>
                    <CardTitle className="capitalize">{level} Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {criteria.map((criterion, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fees">
            <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Object.entries(feeStructure).map(([level, fees]) => (
                <Card key={level}>
                  <CardHeader>
                    <CardTitle className="capitalize">{level} Programs</CardTitle>
                    <p className="text-sm text-gray-600">Annual Fee Structure</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Tuition Fee</span>
                        <span className="font-semibold">{fees.tuition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hostel Fee</span>
                        <span className="font-semibold">{fees.hostel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mess Fee</span>
                        <span className="font-semibold">{fees.mess}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Other Charges</span>
                        <span className="font-semibold">{fees.other}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{fees.total}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Important Dates */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.event}</span>
                    <span className="font-semibold text-blue-600">{item.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Apply?</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Apply Online Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Prospectus
                  </Button>
                  <Button variant="outline" className="w-full">
                    Check Merit List
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Admission Office:</strong> +91-172-2534816</p>
                  <p><strong>Email:</strong> admissions@uiet.puchd.ac.in</p>
                  <p><strong>Timing:</strong> 9:00 AM - 5:00 PM (Mon-Fri)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
