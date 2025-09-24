import React, { useState } from "react";

export default function SupportForm() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div id="contact" className="w-full mx-auto bg-white p-8 rounded-lg shadow-md ">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Support Type */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Support type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 focus:border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <option value="">Select Type</option>
            <option value="general">Inactive or login</option>
            <option value="billing">Others</option>
           
          </select>
        </div>

        {/* Name, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Eg: Thomas Adison"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 focus:border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@hidmona.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 focus:border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+41 79 123 45 67"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 focus:border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            placeholder="Enter your subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 focus:border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 focus:border-none rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-hidmona px-6 py-3 w-full"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
}
