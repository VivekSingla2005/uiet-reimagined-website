
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Globe, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['University Institute of Engineering & Technology', 'Panjab University', 'Sector 25, Chandigarh - 160014', 'India']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-172-2534816', '+91-172-2534817', 'Fax: +91-172-2534818']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@uiet.puchd.ac.in', 'admissions@uiet.puchd.ac.in', 'placement@uiet.puchd.ac.in']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed']
    }
  ];

  const quickContacts = [
    { department: 'Admissions Office', phone: '+91-172-2534816', email: 'admissions@uiet.puchd.ac.in' },
    { department: 'Academic Office', phone: '+91-172-2534817', email: 'academic@uiet.puchd.ac.in' },
    { department: 'Training & Placement', phone: '+91-172-2534818', email: 'placement@uiet.puchd.ac.in' },
    { department: 'Hostel Office', phone: '+91-172-2534819', email: 'hostel@uiet.puchd.ac.in' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, academic queries, or any other information about UIET.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <info.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Links */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start p-2">
                    <Globe className="h-4 w-4 mr-2" />
                    Virtual Campus Tour
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start p-2">
                    <Navigation className="h-4 w-4 mr-2" />
                    Directions to Campus
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start p-2">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Contacts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <Input placeholder="Enter subject" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea 
                      rows={5} 
                      placeholder="Enter your message here..."
                      className="resize-none"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Campus Map */}
            <Card>
              <CardHeader>
                <CardTitle>Campus Location</CardTitle>
                <p className="text-gray-600">Find us on the map</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">UIET Campus, Sector 25, Chandigarh</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Department Contacts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickContacts.map((contact, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{contact.department}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="flex items-center justify-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {contact.phone}
                    </p>
                    <p className="flex items-center justify-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {contact.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
