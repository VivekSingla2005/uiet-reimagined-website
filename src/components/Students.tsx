
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Award, BookOpen, TrendingUp, Trophy, Star, Calendar, MapPin } from 'lucide-react';

const Students = () => {
  const studentStats = [
    { icon: Users, label: 'Total Students', value: '2,500+' },
    { icon: BookOpen, label: 'Student Clubs', value: '25+' },
    { icon: Award, label: 'Achievements', value: '150+' },
    { icon: Trophy, label: 'National Awards', value: '45+' }
  ];

  const studentClubs = [
    {
      name: 'ACM UIET Chapter',
      category: 'Technical',
      members: 120,
      description: 'Programming competitions, hackathons, and technical workshops',
      image: 'photo-1522202176988-66273c2fd55f'
    },
    {
      name: 'IEEE Student Branch',
      category: 'Technical',
      members: 95,
      description: 'Research presentations, industry talks, and technical seminars',
      image: 'photo-1515187029135-18ee286d815b'
    },
    {
      name: 'Robotics Club',
      category: 'Technical',
      members: 80,
      description: 'Robot building competitions and automation projects',
      image: 'photo-1485827404703-89b55fcc595e'
    },
    {
      name: 'Cultural Society',
      category: 'Cultural',
      members: 200,
      description: 'Annual fest organization, dance, music, and drama activities',
      image: 'photo-1493225457124-a3eb161ffa5f'
    },
    {
      name: 'Sports Committee',
      category: 'Sports',
      members: 150,
      description: 'Inter-college tournaments and fitness programs',
      image: 'photo-1571019613454-1cb2f99b2d8b'
    },
    {
      name: 'NSS Unit',
      category: 'Social',
      members: 180,
      description: 'Community service and social awareness programs',
      image: 'photo-1559027615-cd4628902d4a'
    }
  ];

  const achievements = [
    {
      title: 'ACM ICPC World Finals',
      student: 'Rahul Sharma, Priya Patel, Amit Kumar',
      year: '2024',
      position: 'Top 50',
      category: 'Programming'
    },
    {
      title: 'Smart India Hackathon',
      student: 'Team InnoTech',
      year: '2024',
      position: 'Winner',
      category: 'Innovation'
    },
    {
      title: 'IEEE International Conference',
      student: 'Neha Gupta',
      year: '2023',
      position: 'Best Paper Award',
      category: 'Research'
    },
    {
      title: 'National Robotics Competition',
      student: 'Robotics Club UIET',
      year: '2023',
      position: '2nd Place',
      category: 'Technical'
    }
  ];

  const upcomingEvents = [
    {
      title: 'TechFest 2024',
      date: 'March 15-17, 2024',
      location: 'UIET Campus',
      type: 'Technical Festival',
      description: 'Three-day technical extravaganza with competitions, workshops, and exhibitions'
    },
    {
      title: 'Cultural Night',
      date: 'February 20, 2024',
      location: 'Auditorium',
      type: 'Cultural Event',
      description: 'Annual cultural celebration showcasing student talents'
    },
    {
      title: 'Industry Connect',
      date: 'March 5, 2024',
      location: 'Seminar Hall',
      type: 'Career Event',
      description: 'Interaction with industry leaders and career guidance'
    }
  ];

  const alumniSpotlight = [
    {
      name: 'Dr. Rajesh Khanna',
      batch: '2010-2014',
      position: 'Senior Software Engineer at Google',
      achievement: 'Led the development of key features in Google Cloud Platform',
      image: 'photo-1507003211169-0a1dd7228f2d'
    },
    {
      name: 'Priya Sharma',
      batch: '2015-2019',
      position: 'Data Scientist at Microsoft',
      achievement: 'Published research on AI applications in healthcare',
      image: 'photo-1494790108755-2616c34b009c'
    },
    {
      name: 'Amit Singh',
      batch: '2012-2016',
      position: 'Founder & CEO, TechStart Inc.',
      achievement: 'Built a successful startup valued at $50 million',
      image: 'photo-1472099645785-5658abf4ff4e'
    }
  ];

  return (
    <section id="students" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Student Life
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Vibrant Student Community</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience a dynamic campus life filled with opportunities for growth, learning, and making lifelong connections.
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

        {/* Main Content Tabs */}
        <Tabs defaultValue="clubs" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full lg:w-fit mx-auto mb-12 h-auto p-1 bg-white shadow-lg rounded-xl">
            <TabsTrigger value="clubs" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Student Clubs</TabsTrigger>
            <TabsTrigger value="achievements" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Achievements</TabsTrigger>
            <TabsTrigger value="events" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Events</TabsTrigger>
            <TabsTrigger value="alumni" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Alumni</TabsTrigger>
          </TabsList>

          <TabsContent value="clubs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentClubs.map((club, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white group">
                  <div className="relative">
                    <img
                      src={`https://images.unsplash.com/${club.image}?w=400&h=200&fit=crop`}
                      alt={club.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        club.category === 'Technical' ? 'bg-blue-100 text-blue-800' :
                        club.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                        club.category === 'Sports' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {club.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{club.name}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{club.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-slate-500">
                        <Users className="h-4 w-4 mr-1" />
                        {club.members} members
                      </div>
                      <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                        Join Club
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Trophy className="h-5 w-5 text-yellow-500" />
                          <h4 className="text-lg font-semibold text-slate-900">{achievement.title}</h4>
                        </div>
                        <p className="text-slate-600 mb-2">{achievement.student}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                            {achievement.position}
                          </span>
                          <span>{achievement.year}</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h4>
                        <div className="flex items-center text-sm text-slate-600 mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 mb-3">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">{event.description}</p>
                    <Button variant="outline" size="sm" className="w-full hover:bg-blue-50 hover:border-blue-300">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {alumniSpotlight.map((alum, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <img
                      src={`https://images.unsplash.com/${alum.image}?w=120&h=120&fit=crop&crop=face`}
                      alt={alum.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                    />
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{alum.name}</h4>
                    <p className="text-blue-600 font-semibold mb-2">{alum.position}</p>
                    <p className="text-slate-500 text-sm mb-3">{alum.batch}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{alum.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be part of a vibrant student community that encourages innovation, creativity, and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                Student Portal
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Alumni Network
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
