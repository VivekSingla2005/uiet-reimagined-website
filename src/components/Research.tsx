
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Award, TrendingUp, FileText, Globe, Microscope, Cpu } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Advanced research in AI algorithms, deep learning, and neural networks',
      projects: 12,
      publications: 45,
      funding: '₹2.5 Crores',
      icon: Cpu,
      image: 'photo-1677442136019-21780ecad995'
    },
    {
      title: 'Robotics & Automation',
      description: 'Development of intelligent robotic systems and industrial automation',
      projects: 8,
      publications: 28,
      funding: '₹1.8 Crores',
      icon: Microscope,
      image: 'photo-1485827404703-89b55fcc595e'
    },
    {
      title: 'Cybersecurity & Privacy',
      description: 'Research in network security, cryptography, and data privacy',
      projects: 10,
      publications: 35,
      funding: '₹2.2 Crores',
      icon: Globe,
      image: 'photo-1563206767-5b18f218e8de'
    },
    {
      title: 'Sustainable Energy Systems',
      description: 'Green energy solutions and renewable energy technologies',
      projects: 6,
      publications: 22,
      funding: '₹1.5 Crores',
      icon: TrendingUp,
      image: 'photo-1466611653911-95081537e5b7'
    }
  ];

  const researchStats = [
    { icon: BookOpen, label: 'Research Papers', value: '450+' },
    { icon: Users, label: 'Research Scholars', value: '125' },
    { icon: Award, label: 'Patents Filed', value: '28' },
    { icon: TrendingUp, label: 'H-Index', value: '42' }
  ];

  const recentPublications = [
    {
      title: 'Deep Learning Approaches for Medical Image Analysis',
      authors: 'Dr. Rajesh Kumar, Dr. Priya Sharma',
      journal: 'IEEE Transactions on Medical Imaging',
      year: '2024',
      citations: 45
    },
    {
      title: 'Blockchain-based Secure IoT Architecture',
      authors: 'Dr. Amit Singh, Dr. Neha Gupta',
      journal: 'Journal of Network and Computer Applications',
      year: '2024',
      citations: 32
    },
    {
      title: 'Sustainable Manufacturing Processes using AI',
      authors: 'Dr. Ravi Kumar, Dr. Sunita Verma',
      journal: 'Manufacturing Science and Engineering',
      year: '2023',
      citations: 28
    }
  ];

  const researchProjects = [
    {
      title: 'Smart City Infrastructure Development',
      pi: 'Dr. Sunita Verma',
      funding: '₹85 Lakhs',
      duration: '2022-2025',
      agency: 'DST, Government of India',
      status: 'Ongoing'
    },
    {
      title: 'AI-Powered Healthcare Solutions',
      pi: 'Dr. Rajesh Kumar',
      funding: '₹1.2 Crores',
      duration: '2023-2026',
      agency: 'ICMR',
      status: 'Ongoing'
    },
    {
      title: 'Green Energy Optimization Systems',
      pi: 'Dr. Ravi Kumar',
      funding: '₹75 Lakhs',
      duration: '2021-2024',
      agency: 'MNRE',
      status: 'Completed'
    }
  ];

  const collaborations = [
    { name: 'Indian Institute of Technology, Delhi', type: 'Academic' },
    { name: 'Microsoft Research India', type: 'Industry' },
    { name: 'CSIR-CEERI, Pilani', type: 'Research Lab' },
    { name: 'Tata Consultancy Services', type: 'Industry' },
    { name: 'University of California, Berkeley', type: 'International' },
    { name: 'DRDO, Delhi', type: 'Government' }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Research & Innovation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Advancing Knowledge Through Research</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our research endeavors span cutting-edge technologies and address real-world challenges through innovative solutions and collaborative partnerships.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {researchStats.map((stat, index) => (
            <Card key={index} className="text-center bg-gradient-to-br from-white to-blue-50 shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Research Areas</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white group">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src={`https://images.unsplash.com/${area.image}?w=300&h=250&fit=crop`}
                      alt={area.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <area.icon className="h-6 w-6 text-blue-600" />
                      <h4 className="text-xl font-bold text-slate-900">{area.title}</h4>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{area.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-center mb-4">
                      <div>
                        <div className="text-lg font-semibold text-blue-600">{area.projects}</div>
                        <div className="text-xs text-slate-600">Projects</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-green-600">{area.publications}</div>
                        <div className="text-xs text-slate-600">Papers</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-purple-600">{area.funding}</div>
                        <div className="text-xs text-slate-600">Funding</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full hover:bg-blue-50 hover:border-blue-300">
                      Explore Research
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Tabs */}
        <Tabs defaultValue="publications" className="mb-16">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-fit mx-auto mb-12 h-auto p-1 bg-white shadow-lg rounded-xl">
            <TabsTrigger value="publications" className="px-6 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Recent Publications</TabsTrigger>
            <TabsTrigger value="projects" className="px-6 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Active Projects</TabsTrigger>
            <TabsTrigger value="collaborations" className="px-6 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Collaborations</TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <div className="space-y-6">
              {recentPublications.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{pub.title}</h4>
                        <p className="text-slate-600 mb-2">{pub.authors}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {pub.journal}
                          </span>
                          <span>{pub.year}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {pub.citations} citations
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 lg:mt-0 hover:bg-blue-50">
                        View Paper
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {researchProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-slate-900 pr-4">{project.title}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Principal Investigator:</span>
                        <span className="font-semibold text-slate-900">{project.pi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Funding:</span>
                        <span className="font-semibold text-green-600">{project.funding}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Duration:</span>
                        <span className="font-semibold text-slate-900">{project.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Funding Agency:</span>
                        <span className="font-semibold text-blue-600">{project.agency}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collaborations">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborations.map((collab, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-slate-900 mb-2">{collab.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      collab.type === 'Academic' ? 'bg-blue-100 text-blue-800' :
                      collab.type === 'Industry' ? 'bg-green-100 text-green-800' :
                      collab.type === 'International' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {collab.type}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Research Opportunities</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join our research community and contribute to cutting-edge innovations that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3">
                Ph.D Admissions
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3">
                Research Proposals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
