import React from "react";
import { Link } from "react-router";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/logo/hidmon-log.png" alt="hidmona" className="h-12"/>
            </div>
            <p className="text-gray-800 text-sm">
              Fast, secure, and reliable money transfer service connecting you
              globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-800 hover:text-gray-500 text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                to="/location"
                className="block text-gray-800 hover:text-gray-500 text-sm transition-colors"
              >
                Locations
              </Link>
              <Link
                to="/contact"
                className="block text-gray-800 hover:text-gray-500 text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-800 text-sm">Money Transfer</p>
              <p className="text-gray-800 text-sm">Currency Exchange</p>
              <p className="text-gray-800 text-sm">Business Payments</p>
              <p className="text-gray-800 text-sm">Mobile Wallet</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-800">
                <Mail className="h-4 w-4" />
                <span>support@swifttransfer.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-800">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-800">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-700 text-sm">
            © 2024 Hidmona. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
