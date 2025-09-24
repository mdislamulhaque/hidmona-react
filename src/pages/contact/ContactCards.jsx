import React from "react";

const contacts = [
  {
    country: "Canada",
    phone: "+1 (343) 700-1552",
    flag: "https://flagpedia.net/data/flags/w1160/ca.webp",
  },
  {
    country: "Europe",
    phone: "+46 850 248 631",
    flag: "", // EU flag
  },
  {
    country: "Switzerland",
    phone: "+41 21 539 1910",
    flag: "https://flagpedia.net/data/flags/w1160/ch.webp",
  },
  {
    country: "UK",
    phone: "+44 116 366 1004",
    flag: "https://flagpedia.net/data/flags/w1160/gb.webp",
  },
  {
    country: "USA",
    phone: "+1 (440) 597 5158",
    flag: "https://flagpedia.net/data/flags/w1160/us.webp",
  },
];

export default function ContactCards() {
  return (
    <section className="mt-12 shadow-2xl p-4 rounded-2xl">
      <div>
        <h2 className="text-xl md:text-4xl text-center">Contact Information</h2>
      </div>
      <div className="max-w-8xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition duration-200"
          >
            {/* Flag */}
            <img
              src={item.flag || "/images/default-flag.png"}
              alt={`${item.country} flag`}
              className="w-16 h-12"
            />

            {/* Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.country}
              </h3>
              <p className="text-gray-600">{item.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
