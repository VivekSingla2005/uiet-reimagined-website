
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, Calendar, Book, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreviousYearPapersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const papers = {
    btech: [
      { year: '2023', semester: '8th', subject: 'Software Engineering', department: 'CSE', file: 'se_2023_8th.pdf' },
      { year: '2023', semester: '7th', subject: 'Machine Learning', department: 'CSE', file: 'ml_2023_7th.pdf' },
      { year: '2023', semester: '6th', subject: 'Database Management', department: 'CSE', file: 'dbms_2023_6th.pdf' },
      { year: '2022', semester: '8th', subject: 'Digital Communication', department: 'ECE', file: 'dc_2022_8th.pdf' },
      { year: '2022', semester: '7th', subject: 'Power Electronics', department: 'EEE', file: 'pe_2022_7th.pdf' },
      { year: '2022', semester: '6th', subject: 'Web Technologies', department: 'IT', file: 'wt_2022_6th.pdf' }
    ],
    mtech: [
      { year: '2023', semester: '4th', subject: 'Advanced Algorithms', department: 'CSE', file: 'aa_2023_4th.pdf' },
      { year: '2023', semester: '3rd', subject: 'VLSI Design', department: 'ECE', file: 'vlsi_2023_3rd.pdf' },
      { year: '2022', semester: '4th', subject: 'Distributed Systems', department: 'IT', file: 'ds_2022_4th.pdf' }
    ],
    phd: [
      { year: '2023', semester: 'Entrance', subject: 'Research Methodology', department: 'All', file: 'rm_2023_ent.pdf' },
      { year: '2022', semester: 'Entrance', subject: 'Computer Science', department: 'CSE', file: 'cs_2022_ent.pdf' }
    ]
  };

  const departments = ['All', 'CSE', 'ECE', 'EEE', 'IT', 'ME', 'BT', 'AS'];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container-modern">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Previous Year Papers</h1>
            <p className="text-xl text-green-100">
              Access previous year question papers for all programs and departments
            </p>
          </div>
        </div>
      </section>

      <div className="container-modern py-12">
        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search by subject, department, or year..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="btech" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="btech">B.Tech Papers</TabsTrigger>
            <TabsTrigger value="mtech">M.Tech Papers</TabsTrigger>
            <TabsTrigger value="phd">Ph.D Papers</TabsTrigger>
          </TabsList>

          {Object.entries(papers).map(([program, paperList]) => (
            <TabsContent key={program} value={program}>
              <div className="grid gap-4">
                {paperList.map((paper, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{paper.subject}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {paper.year}
                              </span>
                              <span className="flex items-center">
                                <Book className="h-4 w-4 mr-1" />
                                {paper.semester} Semester
                              </span>
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                {paper.department}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Guidelines */}
        <Card className="mt-12 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-800">Important Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-yellow-700">
              <li>• These papers are for reference and study purposes only</li>
              <li>• Syllabus may have changed since these papers were set</li>
              <li>• Contact respective departments for latest syllabus information</li>
              <li>• Report any issues with downloads to admin@uiet.puchd.ac.in</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default PreviousYearPapersPage;
