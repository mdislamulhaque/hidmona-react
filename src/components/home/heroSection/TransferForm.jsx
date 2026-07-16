import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Flag from "react-world-flags";

const countries = [
  { 
    name: "Sweden", 
    code: "SE", 
    currency: "SEK",
    supportedMethods: [{ id: "bank_transfer", label: "Bank Transfer" }]
  },
  { 
    name: "Bangladesh", 
    code: "BD", 
    currency: "BDT",
    supportedMethods: [
      { id: "bkash", label: "bKash / Nagad" },
      { id: "bank_transfer", label: "Bank Transfer" }
    ]
  },
  { 
    name: "Kenya", 
    code: "KE", 
    currency: "KES",
    supportedMethods: [
      { id: "mpesa", label: "MPESA - MMT" },
      { id: "cash_pickup", label: "Cash Pickup" }
    ]
  },
  { 
    name: "United States", 
    code: "US", 
    currency: "USD",
    supportedMethods: [{ id: "bank_transfer", label: "Bank Transfer" }]
  },
  { 
    name: "Canada", 
    code: "CA", 
    currency: "CAD",
    supportedMethods: [{ id: "bank_transfer", label: "Bank Transfer" }]
  },
  { 
    name: "United Kingdom", 
    code: "GB", 
    currency: "GBP",
    supportedMethods: [{ id: "bank_transfer", label: "Bank Transfer" }]
  },
];

const transactionFeeMap = {
  SEK: 1.5000,
  BDT: 15.00,
  USD: 5.00,
  CAD: 4.00,
  GBP: 3.00,
  KES: 100.00
};

// Form Custom Selector Component
const FlagFormSelect = ({ label, countries, selectedCountry, onChange }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg px-4 py-2 flex items-center h-14">
      <span className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-600">
        {label}
      </span>
      <div className="flex items-center flex-grow space-x-3">
        {selectedCountry ? (
          <>
            <Flag code={selectedCountry.code} className="h-6 w-8 rounded-sm object-cover" />
            <span className="text-lg font-medium text-gray-900">{selectedCountry.name}</span>
          </>
        ) : (
          <span className="text-lg text-gray-400">Select a country</span>
        )}
      </div>
      
      <select
        value={selectedCountry?.name || ""}
        onChange={(e) => {
          const newCountry = countries.find(c => c.name === e.target.value);
          onChange(newCountry);
        }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        <option value="" disabled>Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      
      <ChevronDown className="h-5 w-5 text-gray-500 absolute right-4" />
    </div>
  );
};

export default function TransferForm() {
  const [fromCountry, setFromCountry] = useState(countries[0]); // Default Sweden
  const [toCountry, setToCountry] = useState(countries[1]);   // Default Bangladesh
  const [deliveryMethod, setDeliveryMethod] = useState(countries[1].supportedMethods[0].label);
  
  const [amount, setAmount] = useState(""); 
  const [error, setError] = useState("");
  const [isCalculated, setIsCalculated] = useState(false); 
  const [liveRate, setLiveRate] = useState(null); 
  const [loading, setLoading] = useState(false);

  const [calculations, setCalculations] = useState({
    marketFxRate: "",
    transactionFee: "",
    marketFXLabel: "",
    ourRateLabel: "",
    youBeSending: "",
    theyWillReceiveLabel: ""
  });

  // Receiving country পরিবর্তন হলে মেথড অটোমেটিক আপডেট হবে
  useEffect(() => {
    if (toCountry && toCountry.supportedMethods.length > 0) {
      setDeliveryMethod(toCountry.supportedMethods[0].label);
    }
  }, [toCountry]);

  // রিয়েল-টাইম এক্সচেঞ্জ রেট ফেচ করা
  useEffect(() => {
    const fetchLiveRate = async () => {
      if (fromCountry.currency === toCountry.currency) {
        setLiveRate(1);
        return;
      }
      
      setLoading(true);
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCountry.currency}`);
        const data = await response.json();
        
        if (data && data.rates && data.rates[toCountry.currency]) {
          setLiveRate(data.rates[toCountry.currency]);
          setError("");
        } else {
          setError("Could not fetch exchange rate.");
        }
      } catch (err) {
        setError("Network error. Failed to get live rates.");
      } finally {
        setLoading(false);
      }
    };

    fetchLiveRate();
  }, [fromCountry, toCountry]);

  // রেট ক্যালকুলেশন
  const calculateRates = (sendingAmount, currentRate) => {
    const numAmount = parseFloat(sendingAmount);
    if (isNaN(numAmount) || numAmount <= 0 || !currentRate) {
      setIsCalculated(false);
      return;
    }

    const transactionFee = transactionFeeMap[fromCountry.currency] || 0.00;
    const theyWillReceive = (numAmount * currentRate).toFixed(2);

    setCalculations({
      marketFxRate: currentRate.toFixed(4),
      transactionFee: transactionFee.toFixed(4),
      marketFXLabel: `${currentRate.toFixed(4)}`,
      ourRateLabel: `1.0000 ${fromCountry.currency} = ${currentRate.toFixed(4)} ${toCountry.currency}`,
      youBeSending: `${numAmount.toFixed(2)} ${fromCountry.currency}`,
      theyWillReceiveLabel: `${parseFloat(theyWillReceive).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${toCountry.currency}`
    });

    setIsCalculated(true);
  };

  useEffect(() => {
    if (amount && liveRate) {
      calculateRates(amount, liveRate);
    } else {
      setIsCalculated(false);
    }
  }, [amount, liveRate]);

  // Submit Handler (যেটি মিসিং ছিল)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      setError("Please enter an amount first.");
      return;
    }
    if (fromCountry.code === toCountry.code) {
      setError("From and To country cannot be the same.");
      return;
    }
    alert(`Sending money via ${deliveryMethod} from ${fromCountry.name} to ${toCountry.name}`);
  };

  // Input Amount Handler (যেটি মিসিং ছিল)
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="w-full bg-white p-5 md:p-6 rounded-2xl shadow-xl border border-gray-150">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        
        {/* Row 1: Countries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FlagFormSelect
            label="Sending from"
            countries={countries}
            selectedCountry={fromCountry}
            onChange={(country) => setFromCountry(country)}
          />
          <FlagFormSelect
            label="Receiving in"
            countries={countries}
            selectedCountry={toCountry}
            onChange={(country) => setToCountry(country)}
          />
        </div>

        {/* Row 2: Delivery Method */}
        <div className="relative border border-gray-300 rounded-lg px-4 py-2 h-14 flex items-center">
          <span className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-600">
            Delivery Method
          </span>
          <p className="text-lg font-medium text-gray-900 flex-grow">{deliveryMethod}</p>
          <select
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          >
            {toCountry?.supportedMethods?.map((method) => (
              <option key={method.id} value={method.label}>
                {method.label}
              </option>
            ))}
          </select>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </div>

        {/* Row 3: Amounts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative border border-gray-300 rounded-lg px-4 py-2 flex items-center h-14">
            <span className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-600">
              You will send
            </span>
            <div className="flex items-center flex-grow space-x-2">
              <Flag code={fromCountry?.code} className="h-5 w-7 rounded-sm object-cover" />
              <span className="text-lg font-medium text-gray-600">{fromCountry?.currency}</span>
              <input
                type="text"
                value={amount}
                placeholder="0.00"
                onChange={handleAmountChange}
                className="text-lg font-medium text-gray-900 flex-grow text-right pr-2 outline-none w-full"
              />
            </div>
          </div>
          
          <div className="relative border border-gray-300 rounded-lg px-4 py-2 h-14 flex items-center bg-gray-50">
            <span className="absolute -top-3 left-4 bg-white px-2 text-xs text-gray-600">
              Recipient will receive
            </span>
            <div className="flex items-center flex-grow space-x-2">
              <Flag code={toCountry?.code} className="h-5 w-7 rounded-sm object-cover" />
              <span className="text-lg font-medium text-gray-600">{toCountry?.currency}</span>
              <input
                type="text"
                value={isCalculated ? calculations.theyWillReceiveLabel.split(" ")[0] : ""}
                disabled
                placeholder={loading ? "Loading..." : "0.00"}
                className="text-lg font-medium text-gray-900 flex-grow text-right outline-none w-full disabled:bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Calculations Box */}
        {isCalculated && !loading && (
          <div className="p-4 border border-gray-300 rounded-xl bg-white space-y-2 text-sm text-gray-900 font-sans">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Our rate:</span>
              <span className="font-medium text-gray-900">{calculations.ourRateLabel}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Transaction Fee:</span>
              <span className="font-medium text-gray-900">{calculations.transactionFee} {fromCountry?.currency}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Market FX:</span>
              <span className="font-medium text-gray-900">{calculations.marketFXLabel}</span>
            </div>
            <hr className="border-gray-200 my-1" />
            <div className="flex justify-between items-center">
              <span className="text-gray-700">You'll be sending</span>
              <span className="font-medium text-gray-900">{calculations.youBeSending}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">They will receive</span>
              <span className="font-semibold text-lg text-gray-900">{calculations.theyWillReceiveLabel}</span>
            </div>
          </div>
        )}

        {error && (
          <p className="text-red-500 text-xs font-medium text-center">{error}</p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full  btn-hidmona text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center text-lg cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!amount || parseFloat(amount) <= 0 || loading}
        >
          {loading ? "Fetching live rates..." : "Send Now"}
        </button>
      </form>
    </div>
  );
}