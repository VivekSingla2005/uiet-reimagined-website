
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
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg backdrop-blur-md bg-white/95' : ''}`}>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-blue-300 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              +91-172-2534816
            </span>
            <span className="hidden sm:flex items-center hover:text-blue-300 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              info@uiet.puchd.ac.in
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="hidden md:inline">Sector 25, Chandigarh - 160014</span>
            <span className="md:hidden">Chandigarh</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=60&h=60&fit=crop&crop=center" 
              alt="UIET Logo" 
              className="h-14 w-14 rounded-full border-2 border-blue-100"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">UIET</h1>
              <p className="text-sm text-slate-600 hidden sm:block">University Institute of Engineering & Technology</p>
              <p className="text-xs text-slate-500 hidden lg:block">Panjab University, Chandigarh</p>
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
                  className="flex items-center px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium hover:bg-blue-50 rounded-lg"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
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
            className="xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden border-t bg-white">
            <nav className="py-4 space-y-2 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-lg mx-2"
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
