import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import FromSelect from "./FormSelect";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "Japan",
  "India",
  "Brazil",
  "Mexico",
];

export default function TransferForm() {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!fromCountry || !toCountry) {
      setError("Both countries must be selected.");
      return;
    }
    if (fromCountry === toCountry) {
      setError("From and To country cannot be the same.");
      return;
    }

    // Clear error if validation passes
    setError("");
    alert(`Sending money from ${fromCountry} to ${toCountry}`);

    // Reset form
    setFromCountry("");
    setToCountry("");
  };

  return (
    <div className="absolute top-1/2 left-8 md:left-24 transform -translate-y-1/2 w-80 md:w-96 bg-white p-6 md:p-8 rounded-2xl shadow-xl z-40">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Start Your Transfer
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <FromSelect
          value={fromCountry}
          onChange={(e) => setFromCountry(e.target.value)}
          countries={countries}
          label="From Country"
        />
        <FromSelect
          value={toCountry}
          onChange={(e) => setToCountry(e.target.value)}
          countries={countries}
          label="To Country"
        />

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm font-medium text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full btn-hidmona py-2 px-6  flex items-center justify-center space-x-2 text-lg cursor-pointer"
        >
          <span>Send Money</span>
          <ArrowRight className="h-6 w-6" />
        </button>
      </form>
    </div>
  );
}
