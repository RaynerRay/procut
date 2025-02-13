import React from 'react';

const Services = () => {
    const services = [
        {
          number: '01',
          title: 'Electrical Distribution Panels',
          description: 'Custom design and fabrication of high-quality electrical distribution boards and panels for industrial, commercial, and residential applications in Zimbabwe.'
        },
        {
          number: '02',
          title: 'Metal Sheet Works',
          description: 'Precision metal sheet fabrication services including cutting, bending, and forming. We work with various metals to create custom solutions for your specific needs.'
        },
        {
          number: '03',
          title: 'Catering equipment',
          description: 'Catering equipment is also part of our services, including boiling pots, chip fryers, and more.'
        },
        {
          number: '04',
          title: 'Electrical Switchgear and Components',
          description: 'We will also be suppliers of all electrical switchgear and components, including ABB, Schneider, Hager, Chint, and Tosun.'
        },
        {
          number: '05',
          title: 'Structural Steel Work',
          description: 'Expert fabrication of structural steel components including beams, columns, and frameworks for construction projects across Zimbabwe.'
        },
        {
          number: '06',
          title: 'Maintenance Services',
          description: 'Regular maintenance and repair services for metal structures and electrical installations to ensure longevity and optimal performance of your equipment.'
        }
      ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-orange-400 px-3 py-1 rounded-full mb-4">
          <span className="text-sm font-semibold">OUR SERVICES</span>
        </div>
        <h2 className="text-4xl font-bold">Full range of services</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        {/* Left Column Services */}
        <div className="space-y-12">
          {services.slice(0, 3).map(service => (
            <div key={service.number} className="max-w-md">
              <div className="flex gap-4 items-start">
                <span className="text-orange-400 text-2xl font-bold">{service.number}.</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72">
          <img
            src="lamp-spider.png"
            alt="Modern Lighting Fixture"
            className="w-full h-auto"
          />
        </div>

        {/* Right Column Services */}
        <div className="space-y-12">
          {services.slice(3, 6).map(service => (
            <div key={service.number} className="max-w-md ml-auto">
              <div className="flex gap-4 items-start">
                <span className="text-orange-400 text-2xl font-bold">{service.number}.</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;