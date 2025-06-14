
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
      dropdown: ['Undergraduate', 'Postgraduate', 'Ph.D Programs', 'Academic Calendar']
    },
    {
      name: 'Departments',
      href: '#departments',
      dropdown: ['Computer Science', 'Electronics & Communication', 'Mechanical', 'Civil', 'Biotechnology']
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
    { name: 'NIRF', href: '#nirf' },
    { name: 'Student Portal', href: '#portal' },
    { name: 'Library', href: '#library' }
  ];

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <a href="tel:+91-172-2534816" className="flex items-center hover:text-blue-200 transition-colors">
                <Phone className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">+91-172-2534816</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href="mailto:info@uiet.puchd.ac.in" className="hidden sm:flex items-center hover:text-blue-200 transition-colors">
                <Mail className="h-3 w-3 mr-1" />
                info@uiet.puchd.ac.in
              </a>
              <div className="hidden md:flex items-center">
                <Globe className="h-3 w-3 mr-1" />
                NAAC A+ Accredited
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="hidden lg:inline">Sector 25, Chandigarh</span>
                <span className="lg:hidden">Chandigarh</span>
              </div>
              <div className="hidden xl:flex space-x-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs hover:text-blue-200 transition-colors px-2 py-1 rounded"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=50&h=50&fit=crop&crop=center" 
                alt="UIET Logo" 
                className="h-12 w-12 rounded-full border-2 border-blue-100 shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-slate-900">UIET</h1>
              <p className="text-xs lg:text-sm text-slate-600 hidden sm:block">University Institute of Engineering & Technology</p>
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
                  className="flex items-center px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium hover:bg-blue-50 rounded-lg group"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-slate-200 z-50 py-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
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
            <Button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-6">
              Apply Now
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
                    className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-lg mx-2 font-medium"
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
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Apply Now
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
