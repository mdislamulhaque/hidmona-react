import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import SupportForm from "./SupportForm";
import ContactCards from "./ContactCards";
import useTitle from "../../hook/UseTitle";

const Contact = () => {
  useTitle("Hidmona | Contact");
  

 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90">
            We're here to help you with any questions or support you need
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SupportForm />

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Head Office */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Head Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        123 Wall Street, Suite 1000
                        <br />
                        New York, NY 10005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">support@swifttransfer.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Support */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Customer Support
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary-600" />
                      <span className="font-medium">Phone Support</span>
                    </div>
                    <span className="text-green-600 text-sm">24/7</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary-600" />
                      <span className="font-medium">Email Support</span>
                    </div>
                    <span className="text-green-600 text-sm">{"< 24hrs"}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-5 w-5 text-primary-600" />
                      <span className="font-medium">WhatsApp</span>
                    </div>
                    <span className="text-green-600 text-sm">Instant</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Chat on WhatsApp
                  </button>
                  <button className="w-full border border-primary-600 text-primary-600 hover:bg-red-50 font-medium py-2 px-4 rounded-lg transition-colors">
                    Call Support
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ContactCards />
        </div>
      </section>
    </div>
  );
};

export default Contact;
