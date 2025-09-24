import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import useTitle from "../../hook/UseTitle";

const Location = () => {
  useTitle("Hidmona | Location");
 const offices = [
   {
     id: 1,
     city: "Zürich",
     country: "Switzerland",
     address: "Konradstrasse 75, 8005 Zürich",
     phone: "+41 44 123 45 67",
     email: "zurich-konrad75@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 47.3791, lng: 8.5356 },
   },
   {
     id: 2,
     city: "Zürich",
     country: "Switzerland",
     address: "Konradstrasse 49/51, 8005 Zürich",
     phone: "+41 44 987 65 43",
     email: "zurich-konrad49@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 47.38, lng: 8.5362 },
   },
   {
     id: 3,
     city: "Zürich",
     country: "Switzerland",
     address: "Kurzgasse 4, 8004 Zürich",
     phone: "+41 44 765 43 21",
     email: "zurich-kurzgasse@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 47.3752, lng: 8.5284 },
   },
   {
     id: 4,
     city: "Luzern",
     country: "Switzerland",
     address: "Baselstrasse 80, 6003 Luzern",
     phone: "+41 41 123 45 67",
     email: "luzern@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 47.0485, lng: 8.302 },
   },
   {
     id: 5,
     city: "Biel",
     country: "Switzerland",
     address: "Güterstrasse 23, 2502 Biel",
     phone: "+41 32 123 45 67",
     email: "biel@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 47.1325, lng: 7.2429 },
   },
   {
     id: 6,
     city: "Basel",
     country: "Switzerland",
     address: "Clarastrasse 19, 4058 Basel",
     phone: "+41 61 123 45 67",
     email: "basel@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 47.5635, lng: 7.6007 },
   },
   {
     id: 7,
     city: "St. Gallen",
     country: "Switzerland",
     address: "Zürcherstrasse 25, 9000 St. Gallen",
     phone: "+41 71 123 45 67",
     email: "stgallen@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 47.4245, lng: 9.3767 },
   },
   {
     id: 8,
     city: "Lausanne",
     country: "Switzerland",
     address: "Rue du Grand-Pont 2, 1003 Lausanne",
     phone: "+41 21 123 45 67",
     email: "lausanne@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 46.5197, lng: 6.6323 },
   },
   {
     id: 9,
     city: "Genève",
     country: "Switzerland",
     address: "Rue de Berne 12, 1201 Genève",
     phone: "+41 22 123 45 67",
     email: "geneve@swifttransfer.com",
     hours: "Mon-Fri: 9:00 AM - 6:00 PM",
     coordinates: { lat: 46.2102, lng: 6.1457 },
   },
 ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Global Offices</h1>
          <p className="text-xl opacity-90">
            Find a SwiftTransfer office near you for in-person support
          </p>
        </div>
      </section>

     

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Office Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us for personalized service and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {office.city}
                    </h3>
                    <p className="text-gray-600">{office.country}</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{office.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{office.phone}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{office.email}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{office.hours}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primaty-600 transition w-full text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our customer support team is ready to assist you with directions and
            office information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+15551234567"
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Call Us Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
