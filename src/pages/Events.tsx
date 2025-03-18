
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { Calendar, ChevronDown, Filter } from 'lucide-react';

// Mock data for events
const mockEvents = [
  {
    id: '1',
    title: 'Downtown Food Festival',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2023-10-15'),
    location: 'Central Park, Downtown',
    truckCount: 18,
  },
  {
    id: '2',
    title: 'Waterfront Eats & Beats',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2023-10-22'),
    location: 'Harbor View Park',
    truckCount: 12,
  },
  {
    id: '3',
    title: 'International Street Food Fair',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    date: new Date('2023-11-05'),
    location: 'Convention Center Plaza',
    truckCount: 25,
  },
  {
    id: '4',
    title: 'Taste of Fall Market',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    date: new Date('2023-11-12'),
    location: 'Riverside Gardens',
    truckCount: 15,
  },
  {
    id: '5',
    title: 'Winter Food Truck Rally',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80',
    date: new Date('2023-12-03'),
    location: 'City Square',
    truckCount: 20,
  },
  {
    id: '6',
    title: 'Holiday Food Extravaganza',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80',
    date: new Date('2023-12-17'),
    location: 'Main Street Plaza',
    truckCount: 30,
  },
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl font-bold text-foodtruck-slate mb-4">Food Truck Events & Festivals</h1>
            <p className="max-w-2xl mx-auto text-foodtruck-slate/80">
              Discover upcoming food truck gatherings, festivals, and special events in your area.
            </p>
          </div>
          
          {/* Filter Bar */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-10 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-foodtruck-slate/50" />
                </div>
                <select className="pl-10 pr-10 py-2 border border-foodtruck-slate/20 rounded-lg text-foodtruck-slate focus:outline-none focus:ring-2 focus:ring-foodtruck-teal/50 appearance-none bg-transparent">
                  <option>All Dates</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Next Month</option>
                  <option>Custom Range</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-foodtruck-slate/50" />
                </div>
              </div>
              
              <button className="flex items-center px-4 py-2 border border-foodtruck-slate/20 rounded-lg text-foodtruck-slate hover:bg-foodtruck-lightgray/50">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
            
            <div className="flex justify-end">
              <input
                type="text"
                placeholder="Search events..."
                className="px-4 py-2 border border-foodtruck-slate/20 rounded-lg text-foodtruck-slate placeholder:text-foodtruck-slate/50 focus:outline-none focus:ring-2 focus:ring-foodtruck-teal/50"
              />
            </div>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mockEvents.map((event, index) => (
              <div 
                key={event.id}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <EventCard
                  id={event.id}
                  title={event.title}
                  image={event.image}
                  date={event.date}
                  location={event.location}
                  truckCount={event.truckCount}
                />
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md border border-foodtruck-slate/20 bg-white text-foodtruck-slate hover:bg-foodtruck-lightgray/50"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-foodtruck-slate/20 bg-foodtruck-teal text-white"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-foodtruck-slate/20 bg-white text-foodtruck-slate hover:bg-foodtruck-lightgray/50"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 border-t border-b border-foodtruck-slate/20 bg-white text-foodtruck-slate hover:bg-foodtruck-lightgray/50"
              >
                3
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md border border-foodtruck-slate/20 bg-white text-foodtruck-slate hover:bg-foodtruck-lightgray/50"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
