
import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  
  const filters = [
    { id: 'all', label: 'All Cuisines' },
    { id: 'mexican', label: 'Mexican' },
    { id: 'asian', label: 'Asian' },
    { id: 'bbq', label: 'BBQ' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'dessert', label: 'Dessert' },
    { id: 'coffee', label: 'Coffee' }
  ];

  const handleSearchFocus = () => {
    setIsExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!searchValue) {
      setIsExpanded(false);
    }
  };

  const handleFilterSelect = (filterId: string) => {
    setSelectedFilter(filterId === selectedFilter ? null : filterId);
  };

  const clearSearch = () => {
    setSearchValue('');
    setIsExpanded(false);
  };

  return (
    <div className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-foodtruck-lightgray to-white z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-foodtruck-teal/5 rounded-full animate-float"></div>
      <div className="absolute top-20 -left-20 w-64 h-64 bg-foodtruck-gold/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-foodtruck-teal/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="inline-block px-3 py-1 rounded-full bg-foodtruck-teal/10 text-foodtruck-teal text-sm font-medium mb-4 animate-fade-in">
              Discover Local Flavors
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foodtruck-slate mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Track. Taste. <br />
              <span className="text-foodtruck-teal">Thrive.</span>
            </h1>
            <p className="text-lg text-foodtruck-slate/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Find the best food trucks near you, track their locations in real-time, and discover your next favorite meal on wheels.
            </p>
            
            {/* Search Bar */}
            <div 
              className={cn(
                "relative max-w-md mx-auto lg:mx-0 transition-all duration-300 transform",
                isExpanded ? "scale-105" : "scale-100"
              )}
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-foodtruck-slate/50" />
                </div>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="hero-search block w-full pl-10 pr-12 py-3 border border-foodtruck-slate/20 rounded-full bg-white/80 backdrop-blur-sm shadow-lg text-foodtruck-slate placeholder:text-foodtruck-slate/50 focus:outline-none focus:ring-2 focus:ring-foodtruck-teal/50"
                  placeholder="Find food trucks near you..."
                />
                {searchValue && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-14 flex items-center pr-3"
                  >
                    <X className="h-5 w-5 text-foodtruck-slate/50 hover:text-foodtruck-slate" />
                  </button>
                )}
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-4"
                >
                  <MapPin className="h-5 w-5 text-foodtruck-teal" />
                </button>
              </div>
              
              {/* Filter Chips */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterSelect(filter.id)}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium transition-all duration-300",
                      selectedFilter === filter.id
                        ? "bg-foodtruck-teal text-white shadow-md"
                        : "bg-white/80 text-foodtruck-slate/80 hover:bg-foodtruck-teal/10 hover:text-foodtruck-teal"
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foodtruck-teal text-white font-medium shadow-lg hover:bg-foodtruck-slate transition-colors button-pulse">
                  Find Trucks Near You
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-foodtruck-teal text-foodtruck-teal font-medium hover:bg-foodtruck-teal hover:text-white transition-colors">
                  View Live Map
                </button>
              </div>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Food truck illustration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-foodtruck-slate/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 transform -rotate-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white font-bold">4.9</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foodtruck-slate">Top Rated</p>
                    <p className="text-xs text-foodtruck-slate/70">98% positive</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 transform rotate-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-foodtruck-teal" />
                  <div>
                    <p className="text-xs font-medium text-foodtruck-slate">Live Tracking</p>
                    <p className="text-xs text-foodtruck-slate/70">12 trucks nearby</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
