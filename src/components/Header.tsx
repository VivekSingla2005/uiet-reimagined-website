
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Institute',
      href: '/about',
      dropdown: [
        { name: 'About Institute', href: '/about' },
        { name: 'Vision & Mission', href: '/about#mission' },
        { name: 'Administration', href: '/about#admin' },
        { name: 'History', href: '/about#history' },
        { name: 'Infrastructure', href: '/about#infrastructure' },
        { name: 'NAAC', href: '/about#naac' }
      ]
    },
    {
      name: 'Academics',
      href: '/academics',
      dropdown: [
        { name: 'Undergraduate Programs', href: '/academics#undergraduate' },
        { name: 'Postgraduate Programs', href: '/academics#postgraduate' },
        { name: 'Ph.D Programs', href: '/academics#doctoral' },
        { name: 'Academic Calendar', href: '/academics#calendar' },
        { name: 'Syllabus', href: '/academics#syllabus' }
      ]
    },
    {
      name: 'Departments',
      href: '/departments',
      dropdown: [
        { name: 'Computer Science & Engineering', href: '/departments#cse' },
        { name: 'Electronics & Communication', href: '/departments#ece' },
        { name: 'Mechanical Engineering', href: '/departments#me' },
        { name: 'Civil Engineering', href: '/departments#ce' },
        { name: 'Biotechnology', href: '/departments#bt' }
      ]
    },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Research', href: '/research' },
    { name: 'Students', href: '/students' },
    { name: 'Placements', href: '/placements' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Government Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1 sm:py-2">
        <div className="container-modern">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium">Government Institute</span>
              </div>
              <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Panjab University</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="gov-badge bg-white/20 text-white border-white/30 text-xs px-2 py-1">
                NAAC A+ 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50/80 backdrop-blur-sm border-b py-1 sm:py-2">
        <div className="container-modern">
          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-700">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <a href="tel:+91-172-2534816" className="flex items-center hover:text-blue-600 transition-colors">
                <Phone className="h-3 w-3 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">+91-172-2534816</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href="mailto:info@uiet.puchd.ac.in" className="hidden sm:flex items-center hover:text-blue-600 transition-colors">
                <Mail className="h-3 w-3 mr-1 sm:mr-2" />
                <span className="hidden lg:inline">info@uiet.puchd.ac.in</span>
                <span className="lg:hidden">Email</span>
              </a>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 text-xs">
              <MapPin className="h-3 w-3" />
              <span className="hidden sm:inline">Chandigarh, India</span>
              <span className="sm:hidden">CHD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-modern">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo and Institute Name */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              </div>
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                <span className="hidden sm:inline">University Institute of Engineering & Technology</span>
                <span className="sm:hidden">UIET</span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-blue-600 font-medium">
                <span className="hidden sm:inline">Panjab University, Chandigarh</span>
                <span className="sm:hidden">Panjab University</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 transition-colors font-medium hover:bg-blue-50 rounded-lg group text-sm ${
                    location.pathname === item.href 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />}
                </Link>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 py-2 animate-scale-in">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/admissions" className="hidden lg:block">
              <Button className="modern-button text-sm">
                Apply Online
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl mb-2 animate-fade-in-up">
            <nav className="py-4 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 transition-colors rounded-lg mx-2 font-medium text-sm ${
                      location.pathname === item.href 
                        ? 'text-blue-700 bg-blue-50' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link to="/admissions">
                  <Button className="w-full modern-button text-sm" onClick={() => setIsMenuOpen(false)}>
                    Apply Online
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
