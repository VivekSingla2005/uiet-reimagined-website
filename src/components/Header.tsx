
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Flag, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'Institute',
      href: '#about',
      dropdown: ['About Institute', 'Vision & Mission', 'Administration', 'History', 'Infrastructure', 'NAAC']
    },
    {
      name: 'Academics',
      href: '#academics',
      dropdown: ['Undergraduate Programs', 'Postgraduate Programs', 'Ph.D Programs', 'Academic Calendar', 'Syllabus']
    },
    {
      name: 'Departments',
      href: '#departments',
      dropdown: ['Computer Science & Engineering', 'Electronics & Communication', 'Mechanical Engineering', 'Civil Engineering', 'Biotechnology & Bioinformatics']
    },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Research', href: '#research' },
    { name: 'Students', href: '#students' },
    { name: 'Placements', href: '#placements' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' }
  ];

  const quickLinks = [
    { name: 'NAAC', href: '#naac' },
    { name: 'NIRF Ranking', href: '#nirf' },
    { name: 'Student Portal', href: '#portal' },
    { name: 'Library', href: '#library' },
    { name: 'RTI', href: '#rti' }
  ];

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
      {/* Government Top Bar */}
      <div className="gov-header py-2">
        <div className="container-width">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center">
                <Flag className="h-4 w-4 mr-2" />
                <span className="font-semibold">Government of India</span>
              </div>
              <div className="hidden md:flex items-center">
                <Building className="h-3 w-3 mr-1" />
                Ministry of Education
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="hidden lg:inline">Union Territory of Chandigarh</span>
                <span className="lg:hidden">Chandigarh</span>
              </div>
              <div className="hidden xl:flex space-x-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs hover:text-amber-200 transition-colors px-2 py-1 rounded"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="bg-gray-50 border-b py-2">
        <div className="container-width">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-700">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <a href="tel:+91-172-2534816" className="flex items-center hover:text-amber-600 transition-colors">
                <Phone className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">+91-172-2534816</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href="mailto:info@uiet.puchd.ac.in" className="hidden sm:flex items-center hover:text-amber-600 transition-colors">
                <Mail className="h-3 w-3 mr-1" />
                info@uiet.puchd.ac.in
              </a>
            </div>
            <div className="official-badge">
              <span>NAAC A+ Accredited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-width">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Institute Name */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=60&h=60&fit=crop&crop=center" 
                alt="UIET Logo" 
                className="h-14 w-14 rounded border-2 border-amber-200"
              />
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=60&h=60&fit=crop&crop=center" 
                alt="PU Logo" 
                className="h-14 w-14 rounded border-2 border-amber-200"
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                University Institute of Engineering & Technology
              </h1>
              <p className="text-sm lg:text-base text-gray-600 font-medium">
                Panjab University, Chandigarh
              </p>
              <p className="text-xs text-gray-500 hidden sm:block">
                Sector 25, Chandigarh - 160014
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors font-medium hover:bg-amber-50 rounded group"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="hidden lg:flex gov-button-primary">
              Apply Online
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t bg-white shadow-lg rounded-b-lg mb-2">
            <nav className="py-4 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors rounded-lg mx-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full gov-button-primary">
                  Apply Online
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
