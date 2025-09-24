import React from 'react'
import { Shield, Clock, Globe, TrendingUp } from 'lucide-react';

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Bank-Level Security',
      description: 'Your money and personal information are protected with 256-bit SSL encryption.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Lightning Fast',
      description: 'Send money in minutes, not days. Most transfers complete within 15 minutes.'
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      title: 'Global Network',
      description: 'Send money to over 200 countries and territories worldwide.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: 'Best Exchange Rates',
      description: 'Get competitive exchange rates with transparent, low fees.'
    }
  ];

export default function Features() {
  return (
    <>
      <section className="py-16 bg-gray-50/50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className=" text-xl md:text-4xl text-center md:w-1/2 mx-auto font-bold text-gray-900 mb-4">
              Why should you choose Hidmona Money Transfer?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by millions worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
