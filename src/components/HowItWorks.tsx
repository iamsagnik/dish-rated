
import React from 'react';
import { Search, MapPin, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Search,
    title: 'Search',
    description: 'Find food trucks by cuisine, location, or rating.',
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Track',
    description: 'Follow real-time updates on their location and menu.',
    color: 'bg-amber-100',
    textColor: 'text-amber-600',
  },
  {
    icon: Truck,
    title: 'Enjoy',
    description: 'Visit the truck, order ahead, or join an event.',
    color: 'bg-green-100',
    textColor: 'text-green-600',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foodtruck-slate mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-foodtruck-slate/80">
            StreetEats makes it easy to discover and enjoy local food trucks with just a few simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative group"
            >
              {/* Connecting line between features */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-16 right-0 w-full h-0.5 bg-gray-200">
                  <div className="absolute right-0 w-4 h-4 -mt-1.5 mr-1 transform rotate-45 border-t-2 border-r-2 border-gray-200"></div>
                </div>
              )}
              
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
                {/* Icon */}
                <div 
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                    feature.color
                  )}
                >
                  <feature.icon className={cn("h-8 w-8", feature.textColor)} />
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foodtruck-slate mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-foodtruck-slate/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foodtruck-teal text-white font-medium shadow-lg hover:bg-foodtruck-slate transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
