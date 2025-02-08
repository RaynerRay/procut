import React from "react";
import { Activity } from "lucide-react";

const About = () => {
  const services = [
    { name: " Design & fabrication of electrical boards ", percentage: 100 },
    { name: "Metal sheet works and custom fabrication ", percentage: 100 },
    { name: "Supply and installation of electrical equipment ", percentage: 100 },
    { name: "Design & fabrication of electrical panels", percentage: 100 },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mb-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image and Experience */}
        <div className="relative">
          <img
            src="engineer.jpg"
            alt="Electrician"
            className="rounded-lg w-full h-96 object-contain"
          />
          <div className="absolute bottom-0 left-0 bg-orange-500 p-6 rounded-tr-lg">
            <div className="text-5xl font-bold text-gray-900">20</div>
            <div className="text-gray-900 font-medium">
              Years of
              <br />
              experience
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div className="inline-block bg-orange-500 px-3 py-1 rounded-full">
            <span className="text-sm font-semibold">ABOUT COMPANY</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            We are reliability and experience
          </h2>

          <p className="text-gray-600">
             Procut Metal Fabricators, is a
            Zimbabwean-registered company specializing in the design,
            fabrication, and supply of electrical distribution boards, panels,
            and metal sheet works.
          </p>
          <p className="text-gray-600">
            With a team of seasoned professionals boasting extensive industry
            experience, we possess a deep understanding of our clients' needs.
            Our commitment to delivering high-quality products, coupled with our
            dedication to customer satisfaction, sets us apart in the industry.
          </p>
          <p className="text-gray-600">
            Our comprehensive range of services includes:
          </p>

          {/* Service Bars */}
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{service.name}</span>
                  <span className="bg-gray-900 text-white px-2 py-1 text-sm rounded">
                    {service.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: `${service.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
