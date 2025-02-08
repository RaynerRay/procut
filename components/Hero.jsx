'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight,MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const backgroundImages = [
  'switchboard.avif',
  'press-brake1.jpeg',
  'switchboard1.jpg',
  
];


const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const features = [
    {
      icon: <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" />,
      text: "55 Kelvin Road South, Graniteside, Harare, Zimbabwe"
    },
    {
      icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" />,
      text: "+263 78 519 4445"
    },
    {
      icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" />,
      text: "+263 772 340 505"
    },
    {
      icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 flex-shrink-0" />,
      text: "procutmetalfab@gmail.com"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-black/50" 
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 bg-black/50">
        <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-8">
            Professional Metal Fabricators
          </h1>
          <p className="text-lg text-white mb-8">
          specialising in the design, 
fabrication, and supply of electrical distribution boards, panels, and metal sheet works.
          </p>
          <Link href={"/services"}>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors flex items-center space-x-2">
            <span>Our Services</span>
            <span className="text-2xl">+</span>
          </button>
          </Link>
        </div>

       
        </div>
         {/* Features */}
         <div className="rounded-md font-bold grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-16 lg:mt-32 bg-black/90 p-4 sm:p-6">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3"
        >
          {feature.icon}
          <span className="text-base sm:text-lg text-white">{feature.text}</span>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Hero;