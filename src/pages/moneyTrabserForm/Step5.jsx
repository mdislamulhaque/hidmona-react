import { useState } from "react";
import { useNavigate } from "react-router";

export default function Step5({ formData, onPrev }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // Pay button click
  const handlePay = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill all required fields.");
      return;
    }
    setShowOtpModal(true); // open OTP modal
  };

  // OTP Submit
  const handleOtpSubmit = () => {
    if (otp.length !== 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }

    const paymentData = {
      ...formData,
      payment: { cardNumber, expiry, cvv },
      otp,
    };

    console.log("✅ OTP Verified, Payment Success:", paymentData);

    setShowOtpModal(false);

    // Navigate to transaction page with data
    navigate("/dashboard/transaction", { state: { formData: paymentData } });
  };

  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 relative">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Payment Details
      </h2>

      <p className="text-center text-lg font-medium mb-6 text-gray-700">
        Your Transaction Amount: {formData.amount} {formData.currency}
      </p>

      <div className="space-y-4">
        {/* Card Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Card number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="**** **** **** ****"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Expiration */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Expiration date <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* CVV */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Security code <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="***"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onPrev}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handlePay}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Pay
        </button>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h3 className="text-lg font-semibold text-center mb-4">
              Enter OTP
            </h3>
            <input
              type="text"
              maxLength={6}
              placeholder="******"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-center text-xl tracking-widest"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowOtpModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleOtpSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
