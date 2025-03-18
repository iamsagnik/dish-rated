
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, TrendingUp, User, Lock, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        scrolled 
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 rounded-full bg-foodtruck-teal flex items-center justify-center">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-foodtruck-slate">
            DishRated
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-foodtruck-slate hover:text-foodtruck-teal transition-colors">
            Home
          </Link>
          <Link to="/find-trucks" className="text-foodtruck-slate hover:text-foodtruck-teal transition-colors">
            Find Trucks
          </Link>
          <Link to="/events" className="text-foodtruck-slate hover:text-foodtruck-teal transition-colors">
            Events
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-foodtruck-slate hover:text-foodtruck-teal transition-colors">
              <span>More</span>
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/about" className="block px-4 py-2 text-sm text-foodtruck-slate hover:bg-foodtruck-lightgray">
                About Us
              </Link>
              <Link to="/sustainability" className="block px-4 py-2 text-sm text-foodtruck-slate hover:bg-foodtruck-lightgray">
                Sustainability
              </Link>
              <Link to="/blog" className="block px-4 py-2 text-sm text-foodtruck-slate hover:bg-foodtruck-lightgray">
                Blog
              </Link>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link 
              to="/vendor-login" 
              className="inline-flex items-center rounded-full border border-foodtruck-teal px-4 py-1.5 text-sm font-medium text-foodtruck-teal hover:bg-foodtruck-teal hover:text-white transition-colors"
            >
              <Lock className="mr-1.5 h-3.5 w-3.5" />
              Vendor
            </Link>
            <Link 
              to="/profile" 
              className="inline-flex items-center rounded-full bg-foodtruck-teal px-4 py-1.5 text-sm font-medium text-white hover:bg-foodtruck-slate transition-colors"
            >
              <User className="mr-1.5 h-3.5 w-3.5" />
              Sign In
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foodtruck-slate hover:text-foodtruck-teal transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block py-2 text-foodtruck-slate hover:text-foodtruck-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/find-trucks" 
              className="block py-2 text-foodtruck-slate hover:text-foodtruck-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Find Trucks
            </Link>
            <Link 
              to="/events" 
              className="block py-2 text-foodtruck-slate hover:text-foodtruck-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-foodtruck-slate hover:text-foodtruck-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/sustainability" 
              className="block py-2 text-foodtruck-slate hover:text-foodtruck-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sustainability
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 text-foodtruck-slate hover:text-foodtruck-teal transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link 
                to="/vendor-login" 
                className="inline-flex items-center justify-center rounded-full border border-foodtruck-teal px-4 py-1.5 text-sm font-medium text-foodtruck-teal hover:bg-foodtruck-teal hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Lock className="mr-1.5 h-3.5 w-3.5" />
                Vendor Login
              </Link>
              <Link 
                to="/profile" 
                className="inline-flex items-center justify-center rounded-full bg-foodtruck-teal px-4 py-1.5 text-sm font-medium text-white hover:bg-foodtruck-slate transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="mr-1.5 h-3.5 w-3.5" />
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
