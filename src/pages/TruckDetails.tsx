
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Instagram, 
  Twitter, 
  Heart, 
  Share2,
  Calendar,
  DollarSign,
  Truck
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock food truck data
const mockTruckData = {
  id: '1',
  name: 'Taco Haven',
  description: 'Authentic Mexican street food with a modern twist. Our chef uses traditional family recipes with locally-sourced ingredients to create unforgettable tacos, burritos, and quesadillas.',
  images: [
    'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1511689660979-10d2b1aada68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
  ],
  cuisine: 'Mexican',
  rating: 4.8,
  reviewCount: 132,
  phone: '(555) 123-4567',
  website: 'www.tacohaven.com',
  socials: {
    instagram: '@tacohaven',
    twitter: '@tacohaven',
  },
  schedule: [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '11:00 AM - 8:00 PM', location: 'Downtown Park' },
    { day: 'Wednesday', hours: '11:00 AM - 8:00 PM', location: 'Harbor View' },
    { day: 'Thursday', hours: '11:00 AM - 8:00 PM', location: 'Tech Campus' },
    { day: 'Friday', hours: '11:00 AM - 10:00 PM', location: 'Arts District' },
    { day: 'Saturday', hours: '12:00 PM - 10:00 PM', location: 'Farmers Market' },
    { day: 'Sunday', hours: '12:00 PM - 6:00 PM', location: 'Riverside Park' },
  ],
  menu: [
    {
      category: 'Tacos',
      items: [
        { name: 'Carne Asada Taco', description: 'Grilled marinated steak with onions, cilantro, and salsa verde', price: 4.50 },
        { name: 'Pollo Taco', description: 'Seasoned chicken with pico de gallo and avocado crema', price: 4.00 },
        { name: 'Pescado Taco', description: 'Beer-battered fish with cabbage slaw and chipotle aioli', price: 4.75 },
        { name: 'Vegetariano Taco', description: 'Roasted vegetables, black beans, and queso fresco', price: 3.75 },
      ]
    },
    {
      category: 'Burritos',
      items: [
        { name: 'Super Burrito', description: 'Your choice of protein with rice, beans, cheese, sour cream, and guacamole', price: 9.50 },
        { name: 'California Burrito', description: 'Carne asada, french fries, cheese, pico de gallo, and guacamole', price: 10.50 },
      ]
    },
    {
      category: 'Sides',
      items: [
        { name: 'Chips & Salsa', description: 'House-made tortilla chips with fresh salsa', price: 3.50 },
        { name: 'Guacamole', description: 'Fresh avocado with lime, cilantro, and spices', price: 4.50 },
        { name: 'Elote', description: 'Mexican street corn with mayo, cotija cheese, and chile powder', price: 4.00 },
      ]
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Agua Fresca', description: 'Daily selection of fresh fruit water', price: 3.00 },
        { name: 'Mexican Coca-Cola', description: 'Made with real cane sugar', price: 2.50 },
        { name: 'Horchata', description: 'Sweet rice milk with cinnamon', price: 3.50 },
      ]
    },
  ],
};

const TruckDetails = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('menu');
  
  // In a real app, we would fetch data based on the ID
  const truckData = mockTruckData;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image Gallery */}
          <div className="mb-8">
            <div className="relative rounded-xl overflow-hidden h-[400px] shadow-lg">
              <img 
                src={truckData.images[activeImageIndex]} 
                alt={truckData.name}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {truckData.cuisine}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{truckData.rating}</span>
                    <span className="text-white/70 ml-1">({truckData.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <h1 className="font-serif text-3xl md:text-4xl font-bold">{truckData.name}</h1>
              </div>
              
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-foodtruck-slate hover:text-red-500" />
                </button>
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Share2 className="h-5 w-5 text-foodtruck-slate" />
                </button>
              </div>
            </div>
            
            <div className="flex mt-4 space-x-3 overflow-x-auto pb-2">
              {truckData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={cn(
                    "w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all",
                    activeImageIndex === index ? "ring-2 ring-foodtruck-teal" : "opacity-70 hover:opacity-100"
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${truckData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {['menu', 'schedule', 'reviews', 'about'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={cn(
                        "py-4 px-1 font-medium text-sm border-b-2 transition-colors whitespace-nowrap",
                        activeTab === tab
                          ? "border-foodtruck-teal text-foodtruck-teal"
                          : "border-transparent text-foodtruck-slate/70 hover:text-foodtruck-slate hover:border-foodtruck-slate/30"
                      )}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="py-6">
                {activeTab === 'menu' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">Menu</h2>
                    
                    <div className="space-y-10">
                      {truckData.menu.map((category) => (
                        <div key={category.category}>
                          <h3 className="font-medium text-xl text-foodtruck-slate mb-4 pb-2 border-b border-gray-200">
                            {category.category}
                          </h3>
                          <div className="space-y-4">
                            {category.items.map((item) => (
                              <div key={item.name} className="flex justify-between">
                                <div className="pr-4">
                                  <h4 className="font-medium text-foodtruck-slate">{item.name}</h4>
                                  <p className="text-sm text-foodtruck-slate/70 mt-1">{item.description}</p>
                                </div>
                                <div className="flex-shrink-0 font-medium text-foodtruck-slate">
                                  ${item.price.toFixed(2)}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'schedule' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">Weekly Schedule</h2>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      {truckData.schedule.map((day, index) => (
                        <div 
                          key={day.day}
                          className={cn(
                            "flex flex-col sm:flex-row sm:items-center p-4",
                            index < truckData.schedule.length - 1 && "border-b border-gray-200"
                          )}
                        >
                          <div className="sm:w-1/3 mb-2 sm:mb-0">
                            <div className="font-medium text-foodtruck-slate">{day.day}</div>
                          </div>
                          <div className="sm:w-1/3 mb-2 sm:mb-0">
                            <div className={cn(
                              "flex items-center",
                              day.hours === 'Closed' ? "text-red-500" : "text-green-600"
                            )}>
                              <Clock className="h-4 w-4 mr-2" />
                              {day.hours}
                            </div>
                          </div>
                          <div className="sm:w-1/3">
                            {day.location && (
                              <div className="flex items-center text-foodtruck-slate/80">
                                <MapPin className="h-4 w-4 mr-2" />
                                {day.location}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">Reviews</h2>
                    <p className="text-foodtruck-slate/80">
                      This would contain user reviews and ratings in a real implementation.
                    </p>
                  </div>
                )}
                
                {activeTab === 'about' && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foodtruck-slate mb-6">About</h2>
                    <p className="text-foodtruck-slate/80 mb-6">
                      {truckData.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-foodtruck-lightgray/50 rounded-lg p-4">
                        <h3 className="font-medium text-foodtruck-slate mb-3">Contact Information</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">{truckData.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <a
                              href={`https://${truckData.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foodtruck-teal/80 hover:text-foodtruck-teal"
                            >
                              {truckData.website}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Instagram className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">{truckData.socials.instagram}</span>
                          </div>
                          <div className="flex items-center">
                            <Twitter className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">{truckData.socials.twitter}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-foodtruck-lightgray/50 rounded-lg p-4">
                        <h3 className="font-medium text-foodtruck-slate mb-3">Quick Info</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Price: $$ (Average)</span>
                          </div>
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Founded: 2018</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Average wait time: 5-10 minutes</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-foodtruck-teal mr-3" />
                            <span className="text-foodtruck-slate/80">Usually serves: Downtown area</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="font-medium text-lg text-foodtruck-slate mb-4">Current Location</h3>
                
                <div className="bg-foodtruck-lightgray rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-foodtruck-teal mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="font-medium text-foodtruck-slate">Arts District</p>
                      <p className="text-sm text-foodtruck-slate/70">123 Main Street</p>
                      <p className="text-sm text-foodtruck-slate/70">Open until 10:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden h-40 mb-6">
                  {/* This would be a Google Maps embed in a real implementation */}
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-foodtruck-slate/70">
                    Map placeholder
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 rounded-lg bg-foodtruck-teal text-white font-medium hover:bg-foodtruck-slate transition-colors">
                    Pre-Order for Pickup
                  </button>
                  <button className="w-full px-4 py-3 rounded-lg border border-foodtruck-teal text-foodtruck-teal font-medium hover:bg-foodtruck-teal hover:text-white transition-colors">
                    Get Directions
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-foodtruck-slate mb-3">Next Scheduled At</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-foodtruck-teal mr-2" />
                      <span className="text-sm font-medium text-foodtruck-slate">Tomorrow</span>
                      <span className="mx-2 text-foodtruck-slate/30">•</span>
                      <span className="text-sm text-foodtruck-slate/80">Harbor View</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-foodtruck-teal mr-2" />
                      <span className="text-sm font-medium text-foodtruck-slate">Thursday</span>
                      <span className="mx-2 text-foodtruck-slate/30">•</span>
                      <span className="text-sm text-foodtruck-slate/80">Tech Campus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TruckDetails;
