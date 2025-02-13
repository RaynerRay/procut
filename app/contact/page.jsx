import React from 'react';
import { MapPin, Phone, Mail, Clock} from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const contactItems = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      details: ["55 Kelvin Road South, Graniteside, Harare, Zimbabwe"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phones",
      details: ["+263 78 519 4445", "+263 772 340 505","+263 773 979 078"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: ["info@procut.co.zw", "procutmetalfab@gmail.com"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Working Hours",
      details: ["Wednesday - Saturday", "7:00 AM - 5:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-white ">
      {/* Hero Section with Background */}
      <div className="relative h-64 bg-gray-900 ">
   
        <div className=" px-4 h-full flex flex-col justify-center max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contacts</h1>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-orange-400 hover:text-orange-300">Home</Link>
            <span>/</span>
            <span>Contacts</span>
          </div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h2>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-gray-800">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;