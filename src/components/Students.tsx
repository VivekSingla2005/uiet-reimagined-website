
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Trophy, BookOpen, Calendar, Star, Award, Activity, GraduationCap } from 'lucide-react';

const Students = () => {
  const studentStats = [
    { icon: Users, label: 'Total Students', value: '2000+' },
    { icon: GraduationCap, label: 'Graduates (2023)', value: '450' },
    { icon: Trophy, label: 'Awards Won', value: '150+' },
    { icon: Star, label: 'Average CGPA', value: '8.2' }
  ];

  const studentLife = [
    {
      category: 'Technical Clubs',
      clubs: [
        { name: 'Coding Club', members: 200, description: 'Programming competitions and hackathons' },
        { name: 'Robotics Society', members: 150, description: 'Robotics projects and competitions' },
        { name: 'AI/ML Club', members: 180, description: 'Machine learning workshops and projects' },
        { name: 'Electronics Club', members: 120, description: 'Circuit design and embedded systems' }
      ]
    },
    {
      category: 'Cultural Activities',
      clubs: [
        { name: 'Music Society', members: 100, description: 'Musical events and talent shows' },
        { name: 'Drama Club', members: 80, description: 'Theater productions and performances' },
        { name: 'Photography Club', members: 90, description: 'Photography workshops and exhibitions' },
        { name: 'Literary Society', members: 70, description: 'Writing competitions and publications' }
      ]
    },
    {
      category: 'Sports',
      clubs: [
        { name: 'Cricket Team', members: 50, description: 'Inter-college cricket tournaments' },
        { name: 'Basketball Team', members: 40, description: 'University basketball championships' },
        { name: 'Table Tennis Club', members: 60, description: 'Indoor sports and competitions' },
        { name: 'Athletics Club', members: 70, description: 'Track and field events' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Inter-University Coding Championship',
      winner: 'Team AlgoMasters',
      year: '2024',
      description: 'First place in regional programming contest'
    },
    {
      title: 'National Robotics Competition',
      winner: 'RoboTech UIET',
      year: '2024',
      description: 'Best Innovation Award for autonomous robot design'
    },
    {
      title: 'Smart India Hackathon',
      winner: 'Team InnovatED',
      year: '2023',
      description: 'Winner in Education Technology category'
    },
    {
      title: 'IEEE Student Paper Contest',
      winner: 'Priya Sharma (B.Tech CSE)',
      year: '2023',
      description: 'Best paper on sustainable technology solutions'
    }
  ];

  const facilities = [
    {
      name: 'Student Activity Center',
      description: 'Central hub for all student activities and events',
      features: ['Auditorium (500 capacity)', 'Meeting rooms', 'Recreation area', 'Food court']
    },
    {
      name: 'Sports Complex',
      description: 'Modern sports facilities for physical fitness and recreation',
      features: ['Multi-purpose court', 'Gymnasium', 'Cricket ground', 'Athletic track']
    },
    {
      name: 'Library & Study Spaces',
      description: '24/7 study environment with digital resources',
      features: ['Digital library', 'Group study rooms', 'Silent zones', 'Research databases']
    },
    {
      name: 'Hostels',
      description: 'Comfortable accommodation for outstation students',
      features: ['Wi-Fi enabled', 'Mess facilities', 'Common rooms', 'Security systems']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Student Life
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Vibrant Campus Community</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience a dynamic student life with diverse opportunities for academic growth, personal development, and lifelong friendships.
          </p>
        </div>

        {/* Student Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {studentStats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Life Tabs */}
        <Tabs defaultValue="activities" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-3 mb-8 h-12">
            <TabsTrigger value="activities" className="px-8 text-base">Activities & Clubs</TabsTrigger>
            <TabsTrigger value="achievements" className="px-8 text-base">Achievements</TabsTrigger>
            <TabsTrigger value="facilities" className="px-8 text-base">Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="activities">
            <div className="space-y-12">
              {studentLife.map((category, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.clubs.map((club, clubIndex) => (
                      <Card key={clubIndex} className="bg-white shadow-md border-0 hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-slate-900">{club.name}</CardTitle>
                          <div className="text-sm text-blue-600 font-medium">{club.members} active members</div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-slate-600 text-sm mb-4">{club.description}</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Join Club
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white shadow-md border-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-3">
                      <Award className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-slate-900 pr-4">{achievement.title}</h4>
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-blue-600 font-medium mb-2">{achievement.winner}</p>
                        <p className="text-slate-600 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facilities">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="bg-white shadow-md border-0 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-slate-900">{facility.name}</CardTitle>
                    <p className="text-slate-600 text-sm">{facility.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Student Voices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rahul Sharma',
                program: 'B.Tech Computer Science',
                year: '4th Year',
                quote: 'UIET has provided me with incredible opportunities to grow both academically and personally. The coding club helped me secure internships at top tech companies.',
                image: 'photo-1507003211169-0a1dd7228f2d'
              },
              {
                name: 'Priya Gupta',
                program: 'B.Tech Electronics',
                year: '3rd Year',
                quote: 'The research opportunities and faculty support here are exceptional. I\'ve been able to publish papers and participate in international conferences.',
                image: 'photo-1494790108755-2616c34b009c'
              },
              {
                name: 'Arjun Patel',
                program: 'M.Tech Mechanical',
                year: '2nd Year',
                quote: 'The campus life is amazing with so many clubs and activities. I\'ve made lifelong friends and developed leadership skills through student organizations.',
                image: 'photo-1472099645785-5658abf4ff4e'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <img
                    src={`https://images.unsplash.com/${testimonial.image}?w=100&h=100&fit=crop&crop=face`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <blockquote className="text-slate-600 text-sm italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-slate-900 font-semibold">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.program}</div>
                  <div className="text-blue-600 text-xs">{testimonial.year}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Student Community</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be part of a vibrant community that nurtures your talents, builds your skills, and prepares you for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
