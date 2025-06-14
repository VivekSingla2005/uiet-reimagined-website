
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
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
      dropdown: ['University', 'History', 'Mission & Vision', 'Administration']
    },
    {
      name: 'Academics',
      href: '#academics',
      dropdown: ['Undergraduate', 'Postgraduate', 'Ph.D Programs', 'Curriculum']
    },
    {
      name: 'Departments',
      href: '#departments',
      dropdown: ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Biotechnology']
    },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Research', href: '#research' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl backdrop-blur-md bg-white/95' : ''}`}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="flex items-center hover:text-yellow-300 transition-colors">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="hidden xs:inline">+91-172-2534816</span>
              <span className="xs:hidden">Call</span>
            </span>
            <span className="flex items-center hover:text-yellow-300 transition-colors">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="hidden sm:inline">info@uiet.puchd.ac.in</span>
              <span className="sm:hidden">Email</span>
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span className="hidden sm:inline">Sector 25, Chandigarh - 160014</span>
            <span className="sm:hidden">Location</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4 animate-fadeInLeft">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=60&h=60&fit=crop&crop=center" 
              alt="UIET Logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full hover-scale"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">UIET</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">University Institute of Engineering & Technology</p>
              <p className="text-xs text-gray-500 hidden md:block">Panjab University, Chandigarh</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 animate-fadeInRight">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className={`relative animate-fadeInUp stagger-${index + 1}`}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:bg-blue-50 rounded-lg"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border z-50 animate-scaleIn">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subItem}
                        href="#"
                        className={`block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg animate-fadeInUp stagger-${subIndex + 1}`}
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
            className="xl:hidden hover-scale"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t bg-white animate-slideDown">
            <nav className="py-4 space-y-2 max-h-96 overflow-y-auto">
              {navigationItems.map((item, index) => (
                <div key={item.name} className={`animate-fadeInUp stagger-${index + 1}`}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-lg mx-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-8 space-y-1">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subItem}
                          href="#"
                          className={`block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 animate-fadeInLeft stagger-${subIndex + 1}`}
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
