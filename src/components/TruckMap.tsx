
import React from 'react';

const TruckMap = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg relative">
      {/* This is just a placeholder. In a real app, we would integrate with Google Maps or Mapbox */}
      <img 
        src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2349&q=80" 
        alt="Map"
        className="w-full h-full object-cover"
      />
      
      {/* Map overlay with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foodtruck-slate/30"></div>
      
      {/* Fake Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="p-2 bg-white rounded-full shadow-md">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>
        <button className="p-2 bg-white rounded-full shadow-md">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
          </svg>
        </button>
      </div>
      
      {/* Disclaimer Text */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <p className="text-sm text-foodtruck-slate">This is a placeholder map. Real implementation would use Google Maps or Mapbox.</p>
      </div>
      
      {/* Map Markers - These would be dynamically placed in a real implementation */}
      <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
        <div className="w-4 h-4 bg-foodtruck-teal rounded-full shadow-lg"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <div className="w-4 h-4 bg-foodtruck-teal rounded-full shadow-lg"></div>
      </div>
      <div className="absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="w-4 h-4 bg-foodtruck-teal rounded-full shadow-lg"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <div className="w-4 h-4 bg-foodtruck-teal rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default TruckMap;
