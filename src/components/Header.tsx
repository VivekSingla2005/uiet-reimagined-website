
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +91-172-2534816
            </span>
            <span className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              info@uiet.puchd.ac.in
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            Sector 25, Chandigarh - 160014
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
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">UIET</h1>
              <p className="text-sm text-gray-600">University Institute of Engineering & Technology</p>
              <p className="text-xs text-gray-500">Panjab University, Chandigarh</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
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
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="py-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-8">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
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
