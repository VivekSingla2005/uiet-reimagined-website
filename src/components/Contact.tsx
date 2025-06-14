
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for admissions, academic queries, or any other information about UIET.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-card border border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <info.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Links */}
            <Card className="bg-blue-50 border-blue-200 hover-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start hover-button">
                    <Globe className="h-4 w-4 mr-2" />
                    Virtual Campus Tour
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start hover-button">
                    <Navigation className="h-4 w-4 mr-2" />
                    Directions to Campus
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start hover-button">
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
            <Card className="hover-card border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Send us a Message</CardTitle>
                <p className="text-slate-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <Input placeholder="Enter your full name" className="border-slate-300 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <Input type="email" placeholder="Enter your email" className="border-slate-300 focus:border-blue-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <Input placeholder="Enter your phone number" className="border-slate-300 focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                      <Input placeholder="Enter subject" className="border-slate-300 focus:border-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea 
                      rows={5} 
                      placeholder="Enter your message here..."
                      className="resize-none border-slate-300 focus:border-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 hover-button">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Campus Map */}
            <Card className="hover-card border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Campus Location</CardTitle>
                <p className="text-slate-600">Find us on the map</p>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-semibold">Interactive Map</p>
                    <p className="text-sm">UIET Campus, Sector 25, Chandigarh</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="hover-button">
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
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Department Contacts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => (
              <Card key={index} className="text-center hover-card border border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">{contact.department}</h4>
                  <div className="text-sm text-slate-600 space-y-2">
                    <p className="flex items-center justify-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {contact.phone}
                    </p>
                    <p className="flex items-center justify-center">
                      <Mail className="h-3 w-3 mr-1" />
                      <span className="truncate">{contact.email}</span>
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
