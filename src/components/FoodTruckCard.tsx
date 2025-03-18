
import React from 'react';
import { Heart, Star, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FoodTruckCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  distance?: string;
  status?: 'open' | 'closed' | 'opening-soon';
  featured?: boolean;
  waitTime?: string;
  className?: string;
}

const FoodTruckCard = ({
  id,
  name,
  image,
  cuisine,
  rating,
  reviewCount,
  distance,
  status = 'open',
  featured = false,
  waitTime,
  className,
}: FoodTruckCardProps) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1",
        featured ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-sm shadow-md",
        className
      )}
    >
      {featured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center rounded-full bg-foodtruck-gold/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-white">
            Featured
          </span>
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-300">
          <Heart className="h-5 w-5 text-foodtruck-slate hover:text-foodtruck-teal transition-colors duration-300" />
        </button>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex justify-between items-end">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
                {cuisine}
              </span>
            </div>
            <div className="flex items-center text-white">
              <Star className="h-4 w-4 text-foodtruck-gold mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              <span className="text-xs ml-1 text-white/70">({reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/trucks/${id}`}>
          <h3 className="font-serif text-lg font-medium text-foodtruck-slate mb-2 hover:text-foodtruck-teal transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between text-sm mb-3">
          {status === 'open' && (
            <span className="flex items-center text-green-600">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-1.5"></span>
              Open Now
            </span>
          )}
          {status === 'closed' && (
            <span className="flex items-center text-red-500">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5"></span>
              Closed
            </span>
          )}
          {status === 'opening-soon' && (
            <span className="flex items-center text-amber-500">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-1.5"></span>
              Opening Soon
            </span>
          )}
          
          {waitTime && (
            <span className="flex items-center text-foodtruck-slate text-xs">
              <Clock className="h-3.5 w-3.5 text-foodtruck-slate/70 mr-1" />
              {waitTime} wait
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm">
          {distance && (
            <span className="flex items-center text-foodtruck-slate/80">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              {distance} away
            </span>
          )}
          
          <button className="text-foodtruck-teal font-medium hover:text-foodtruck-slate transition-colors text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodTruckCard;
