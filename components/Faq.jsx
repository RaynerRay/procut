"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why to choose us?",
      answer: "We offer professional electrical services with years of experience, certified electricians, and competitive pricing. Our team is committed to providing high-quality work and excellent customer service."
    },
    {
      question: "How quickly can you get help?",
      answer: "We provide 24/7 emergency services and can typically respond within 1-2 hours for urgent cases. For non-emergency appointments, we can usually schedule within 24-48 hours."
    },
    {
      question: "How to pay for services?",
      answer: "We accept all major credit cards, cash, and digital payments including PayPal and online bank transfers. We provide detailed invoices and can arrange payment plans for larger projects."
    },
    {
      question: "What to call an electrician?",
      answer: "Call an electrician for any electrical issues including power outages, flickering lights, circuit breaker problems, electrical upgrades, or installation of new fixtures and outlets."
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