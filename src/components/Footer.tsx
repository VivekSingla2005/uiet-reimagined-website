
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About UIET', href: '/about' },
    { name: 'Academic Programs', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Research', href: '/research' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Student Life', href: '/students' },
    { name: 'Alumni', href: '/students#alumni' },
    { name: 'Employment', href: '/employment' }
  ];

  const departments = [
    { name: 'Computer Science & Engineering', href: '/departments/cse' },
    { name: 'Electronics & Communication', href: '/departments/ece' },
    { name: 'Mechanical Engineering', href: '/departments/me' },
    { name: 'Information Technology', href: '/departments/it' },
    { name: 'Biotechnology', href: '/departments/bt' }
  ];

  const resources = [
    { name: 'Library', href: '/academics#library' },
    { name: 'Student Portal', href: '/students#portal' },
    { name: 'Faculty Portal', href: '/faculty#portal' },
    { name: 'Alumni Portal', href: '/students#alumni' },
    { name: 'E-Learning', href: '/academics#elearning' },
    { name: 'Campus Map', href: '/about#location' },
    { name: 'Academic Calendar', href: '/academics#calendar' },
    { name: 'Previous Papers', href: '/previous-papers' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/uiet', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/uiet', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/uiet', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/uiet', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/uiet', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=50&h=50&fit=crop&crop=center" 
                alt="UIET Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">UIET</h3>
                <p className="text-sm text-gray-400">Panjab University</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              University Institute of Engineering & Technology, committed to excellence in 
              engineering education, research, and innovation since 2002.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                <span>Sector 25, Chandigarh - 160014</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                <a href="tel:+91-172-2534816" className="hover:text-blue-400 transition-colors">
                  +91-172-2534816
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@uiet.puchd.ac.in" className="hover:text-blue-400 transition-colors">
                  info@uiet.puchd.ac.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 rounded-full transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link
                    to={dept.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for latest updates and announcements.</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 University Institute of Engineering & Technology, Panjab University. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/about#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/about#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/about#accessibility" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
