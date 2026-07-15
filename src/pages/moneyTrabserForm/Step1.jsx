import { useState, useEffect } from "react";

// demo static data (later replace with API)
const countryOptions = [
  { code: "AU", name: "Australia", rate: 1.22147, currency: "USD", flag: "🇦🇺" },
  { code: "BD", name: "Bangladesh", rate: 120.55, currency: "BDT", flag: "🇧🇩" },
  { code: "IN", name: "India", rate: 92.31, currency: "INR", flag: "🇮🇳" },
];

export default function Step1({ onNext }) {
  const [toCountry, setToCountry] = useState(countryOptions[0]);
  const [amount, setAmount] = useState("");
  const [receive, setReceive] = useState(0);

  // Auto calculate recipient amount
  useEffect(() => {
    if (amount && toCountry) {
      setReceive((parseFloat(amount) * toCountry.rate).toFixed(3));
    } else {
      setReceive(0);
    }
  }, [amount, toCountry]);

  const handleNext = () => {
    if (!amount) return;
    // pass data to parent if needed
    onNext({
      fromCountry: "Switzerland",
      toCountry: toCountry.name,
      sendAmount: amount,
      receiveAmount: receive,
      receiveCurrency: toCountry.currency,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6 border-b pb-2">
        Money Transfer
      </h2>

      {/* From Country */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">I'm sending from</label>
        <div className="w-full border rounded px-4 py-2 flex items-center gap-2 bg-gray-50">
          <span className="text-xl">🇨🇭</span>
          <span>Switzerland (CHF)</span>
        </div>
      </div>

      {/* To Country */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">To someone dear in</label>
        <select
          value={toCountry.code}
          onChange={(e) =>
            setToCountry(countryOptions.find((c) => c.code === e.target.value))
          }
          className="w-full border rounded px-4 py-2"
        >
          {countryOptions.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Amount + Currency Row */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Amount</label>
        <div className="flex">
          {/* Input */}
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="flex-1 border rounded-l px-4 py-2 outline-none"
          />
          {/* From Currency - CHF */}
          <span className="bg-gray-100 px-3 py-2 border border-l-0">CHF</span>
                  {/* To Currency - dynamic */}
                  <span>
                      TO
                  </span>
          <select
            value={toCountry.currency}
            onChange={() => {}}
            disabled
            className="bg-gray-100 px-3 py-2 border-l outline-none"
          >
            <option value={toCountry.currency}>{toCountry.currency}</option>
          </select>
        </div>
      </div>

      {/* Calculation */}
      <div className="mb-6 text-sm space-y-1">
        <p>
          Amount to send :
          <span className="font-semibold ml-2">
            {amount ? parseFloat(amount).toFixed(3) : "0.000"} CHF
          </span>
        </p>
        <p>
          Recipient receives :
          <span className="font-semibold ml-2">
            {receive} {toCountry.currency}
          </span>
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!amount}
        className={`w-full py-2 rounded text-white font-medium transition 
          ${
            amount
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
      >
        Next
      </button>
    </div>
  );
}
