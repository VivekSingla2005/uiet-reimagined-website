
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Globe } from 'lucide-react';
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
      name: 'About',
      href: '#about',
      dropdown: ['Institute', 'Vision & Mission', 'Administration', 'History', 'Infrastructure']
    },
    {
      name: 'Academics',
      href: '#academics',
      dropdown: ['Undergraduate', 'Postgraduate', 'Ph.D Programs', 'Academic Calendar', 'Examination']
    },
    {
      name: 'Departments',
      href: '#departments',
      dropdown: ['Computer Science', 'Electronics & Communication', 'Mechanical', 'Civil', 'Biotechnology']
    },
    {
      name: 'Faculty',
      href: '#faculty',
      dropdown: ['All Faculty', 'Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Biotechnology']
    },
    { name: 'Admissions', href: '#admissions' },
    {
      name: 'Research',
      href: '#research',
      dropdown: ['Research Areas', 'Publications', 'Projects', 'Collaborations']
    },
    {
      name: 'Students',
      href: '#students',
      dropdown: ['Current Students', 'Alumni', 'Student Activities', 'Achievements']
    },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' }
  ];

  const quickLinks = [
    { name: 'NAAC', href: '#naac' },
    { name: 'NIRF', href: '#nirf' },
    { name: 'Student Portal', href: '#portal' },
    { name: 'Library', href: '#library' }
  ];

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl backdrop-blur-sm bg-white/95' : ''}`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-blue-200 transition-colors cursor-pointer">
              <Phone className="h-4 w-4 mr-2" />
              +91-172-2534816
            </span>
            <span className="hidden sm:flex items-center hover:text-blue-200 transition-colors cursor-pointer">
              <Mail className="h-4 w-4 mr-2" />
              info@uiet.puchd.ac.in
            </span>
            <span className="hidden md:flex items-center hover:text-blue-200 transition-colors cursor-pointer">
              <Globe className="h-4 w-4 mr-2" />
              NAAC A+ Accredited
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Sector 25, Chandigarh - 160014</span>
              <span className="md:hidden">Chandigarh</span>
            </div>
            <div className="hidden lg:flex space-x-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs hover:text-blue-200 transition-colors border-r border-blue-700 pr-3 last:border-r-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=60&h=60&fit=crop&crop=center" 
                alt="UIET Logo" 
                className="h-16 w-16 rounded-full border-2 border-blue-100 shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">UIET</h1>
              <p className="text-sm text-slate-600 hidden sm:block font-medium">University Institute of Engineering & Technology</p>
              <p className="text-xs text-blue-600 hidden lg:block font-medium">Panjab University, Chandigarh</p>
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
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium hover:bg-blue-50 rounded-lg relative group"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 border-b border-slate-100 last:border-b-0"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="xl:hidden hover:bg-blue-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t bg-white shadow-lg rounded-b-xl">
            <nav className="py-4 space-y-2 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 rounded-lg mx-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-8 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
