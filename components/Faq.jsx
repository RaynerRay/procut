"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why choose ProCut?",
      answer: "ProCut offers precision metal fabrication with high-quality materials, expert craftsmanship, and reliable service. We specialize in custom metalwork, ensuring durability and excellence in every project. Our services that are standard governed"
    },
    {
      question: "What services do you provide?",
      answer: "We provide a wide range of metal fabrication services, including manufacturing of all switchboads panels, welding, sheet metal bending, custom steelwork, and structural fabrication for both industrial and residential projects. We also offer uninterrupted power supply solutions"
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines vary depending on complexity and size. Small custom orders can take a few hours, while larger industrial projects may take a few weeks. We always strive to meet deadlines without compromising quality."
    },
    {
      question: "Do you offer custom metal fabrication?",
      answer: "Yes! We specialize in custom metal fabrication tailored to your specifications. Whether it's industrial equipment, decorative metalwork, or structural components, we bring your vision to life with precision."
    },
    {
      question: "How can I get a quote?",
      answer: "You can request a free quote by contacting us via phone, email, or visiting our workshop. Provide details about your project, including dimensions, materials, and design specifications for an accurate estimate."
    }
  ];
  

  return (
    <div className="bg-gray-50 py-8">
    <div className="max-w-4xl mx-auto p-6 mt-8 ">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Popular questions</h2>
        <p className="text-sm text-orange-500 uppercase tracking-wide">EXPLORE FAQ'S</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-lg transition-all duration-200"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="bg-orange-400 p-1 rounded-lg">
                {openIndex === index ? 
                  <Minus className="w-5 h-5" /> : 
                  <Plus className="w-5 h-5" />
                }
              </span>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Link href={"/contact"}>
      <button className="mt-8 px-6 py-3 bg-orange-400 rounded-lg flex items-center gap-2 hover:bg-orange-500 transition-colors">
      
        <Plus className="w-5 h-5" />
        <span className="font-medium">Contact Us</span>

      </button>
      </Link>
    </div>
    </div>
  );
};

export default Faq;