
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, MapPin, Clock, DollarSign, Users, Building, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmploymentPage = () => {
  const jobOpenings = [
    {
      title: 'Software Developer',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Chandigarh',
      type: 'Full-time',
      salary: '₹5-8 LPA',
      experience: 'Fresher',
      skills: ['Java', 'Spring Boot', 'MySQL'],
      posted: '2 days ago'
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Corp',
      location: 'Bangalore',
      type: 'Full-time',
      salary: '₹6-10 LPA',
      experience: '1-2 years',
      skills: ['Python', 'SQL', 'Power BI'],
      posted: '1 week ago'
    },
    {
      title: 'Network Engineer',
      company: 'Telecom India Ltd',
      location: 'Delhi',
      type: 'Full-time',
      salary: '₹4-7 LPA',
      experience: 'Fresher',
      skills: ['CCNA', 'Network Security', 'TCP/IP'],
      posted: '3 days ago'
    }
  ];

  const careerResources = [
    {
      title: 'Resume Building Workshop',
      description: 'Learn to create professional resumes that stand out',
      date: 'Every Monday, 2:00 PM',
      venue: 'Seminar Hall'
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and tips for technical rounds',
      date: 'Every Wednesday, 3:00 PM',
      venue: 'Training Room'
    },
    {
      title: 'Soft Skills Development',
      description: 'Communication and presentation skills enhancement',
      date: 'Every Friday, 4:00 PM',
      venue: 'Conference Room'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container-modern">
          <div className="text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Employment & Jobs</h1>
            <p className="text-xl text-purple-100">
              Explore career opportunities and employment resources for UIET graduates
            </p>
          </div>
        </div>
      </section>

      <div className="container-modern py-12">
        <Tabs defaultValue="jobs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Job Openings</TabsTrigger>
            <TabsTrigger value="resources">Career Resources</TabsTrigger>
            <TabsTrigger value="alumni">Alumni Network</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Current Job Openings</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Post a Job
                </Button>
              </div>
              
              <div className="grid gap-6">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex items-center space-x-4 text-gray-600 mb-3">
                            <span className="flex items-center">
                              <Building className="h-4 w-4 mr-1" />
                              {job.company}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm mb-3">
                            <span className="flex items-center text-green-600">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {job.experience}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {job.skills.map((skill, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">Posted {job.posted}</p>
                        </div>
                        <div className="flex flex-col space-y-2 ml-6">
                          <Button className="bg-green-600 hover:bg-green-700">
                            Apply Now
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Career Development Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {careerResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          {resource.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                          {resource.venue}
                        </div>
                      </div>
                      <Button className="mt-4 w-full">Register Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Career Guidance</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• One-on-one counseling sessions</li>
                        <li>• Career assessment tests</li>
                        <li>• Industry mentorship programs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Skill Development</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Technical certification courses</li>
                        <li>• Online learning platforms access</li>
                        <li>• Workshop series</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Alumni Network & Success Stories</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Rajesh Kumar', batch: '2018', company: 'Google', position: 'Senior SDE' },
                  { name: 'Priya Sharma', batch: '2019', company: 'Microsoft', position: 'Product Manager' },
                  { name: 'Amit Singh', batch: '2017', company: 'Amazon', position: 'Tech Lead' }
                ].map((alumni, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{alumni.name}</h3>
                      <p className="text-blue-600">{alumni.position}</p>
                      <p className="text-sm text-gray-600">{alumni.company}</p>
                      <p className="text-xs text-gray-500">Batch of {alumni.batch}</p>
                      <Button size="sm" className="mt-3">Connect</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="internships">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Internship Opportunities</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Summer Internship Program 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Apply for summer internships with our industry partners. Get hands-on experience 
                    and potentially secure full-time offers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Program Highlights</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 8-12 week duration</li>
                        <li>• Stipend provided</li>
                        <li>• Mentorship support</li>
                        <li>• Certificate of completion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Application Process</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Submit resume and cover letter</li>
                        <li>• Technical assessment</li>
                        <li>• Interview rounds</li>
                        <li>• Final selection</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Apply for Internship
                  </Button>
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

export default EmploymentPage;
