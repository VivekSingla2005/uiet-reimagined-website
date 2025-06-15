
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Heart, Scale, UserCheck, AlertTriangle, Flask, Laptop } from 'lucide-react';

const CommitteesPage = () => {
  const committees = [
    {
      name: 'Departmental Committee',
      icon: Users,
      description: 'Oversees academic and administrative functions of all departments',
      members: ['Prof. R.K. Sharma (Chairperson)', 'Dr. P. Singh', 'Dr. M. Gupta', 'Dr. S. Verma'],
      responsibilities: [
        'Academic policy formulation',
        'Curriculum development',
        'Faculty recruitment',
        'Research coordination'
      ]
    },
    {
      name: 'Grievance Redressal Cell',
      icon: Scale,
      description: 'Addresses student and staff grievances in a fair and timely manner',
      members: ['Dr. A. Kumar (Chairperson)', 'Prof. S. Rani', 'Dr. N. Patel', 'Student Representative'],
      responsibilities: [
        'Handle student complaints',
        'Ensure fair resolution',
        'Maintain confidentiality',
        'Regular grievance monitoring'
      ]
    },
    {
      name: 'Committee Against Sexual Harassment',
      icon: Shield,
      description: 'Prevents and addresses cases of sexual harassment as per UGC guidelines',
      members: ['Dr. Priya Sharma (Chairperson)', 'Prof. M. Singh', 'External Member', 'Student Member'],
      responsibilities: [
        'Prevention of sexual harassment',
        'Complaint investigation',
        'Awareness programs',
        'Policy implementation'
      ]
    },
    {
      name: 'Board of Control',
      icon: UserCheck,
      description: 'Maintains academic standards and examination procedures',
      members: ['Director (Chairperson)', 'All HODs', 'External Examiner', 'Controller of Examinations'],
      responsibilities: [
        'Examination oversight',
        'Result declaration',
        'Academic standards',
        'Quality assurance'
      ]
    },
    {
      name: 'SC/ST Cell',
      icon: Heart,
      description: 'Ensures welfare and equal opportunities for SC/ST students and staff',
      members: ['Dr. R. Patel (Coordinator)', 'Prof. K. Singh', 'Student Representatives'],
      responsibilities: [
        'Scholarship assistance',
        'Mentoring programs',
        'Grievance handling',
        'Awareness initiatives'
      ]
    },
    {
      name: 'Anti-Ragging Committee',
      icon: AlertTriangle,
      description: 'Prevents ragging and ensures a safe campus environment for all students',
      members: ['Prof. S.K. Gupta (Chairperson)', 'Security Officer', 'Student Counselor', 'Senior Students'],
      responsibilities: [
        'Ragging prevention',
        'Complaint handling',
        'Disciplinary action',
        'Awareness campaigns'
      ]
    },
    {
      name: 'Research & Development Cell',
      icon: Flask,
      description: 'Promotes research culture and facilitates R&D activities',
      members: ['Dr. V. Kumar (Coordinator)', 'Research Faculty', 'Industry Representatives'],
      responsibilities: [
        'Research promotion',
        'Funding assistance',
        'Industry collaboration',
        'Patent filing support'
      ]
    },
    {
      name: 'UTechnos Committee',
      icon: Laptop,
      description: 'Organizes the annual technical festival and promotes technical activities',
      members: ['Prof. A. Rani (Faculty Coordinator)', 'Student Coordinators', 'Technical Team'],
      responsibilities: [
        'Festival organization',
        'Technical competitions',
        'Industry partnerships',
        'Student engagement'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container-modern">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Committees</h1>
            <p className="text-xl text-blue-100">
              Ensuring governance, welfare, and excellence across all aspects of institute life
            </p>
          </div>
        </div>
      </section>

      <div className="container-modern py-12">
        <div className="grid gap-8">
          {committees.map((committee, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center text-xl">
                  <committee.icon className="h-6 w-6 mr-3 text-blue-600" />
                  {committee.name}
                </CardTitle>
                <p className="text-gray-600 mt-2">{committee.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Committee Members</h4>
                    <ul className="space-y-2">
                      {committee.members.map((member, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {committee.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mt-12 bg-blue-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need to Contact a Committee?</h3>
            <p className="text-gray-600 mb-6">
              For any concerns, suggestions, or queries related to any committee, 
              please reach out through the following channels:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold">Email</h4>
                <p className="text-blue-600">committees@uiet.puchd.ac.in</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold">Phone</h4>
                <p className="text-blue-600">+91-172-2534816</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold">Office Hours</h4>
                <p className="text-blue-600">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CommitteesPage;
