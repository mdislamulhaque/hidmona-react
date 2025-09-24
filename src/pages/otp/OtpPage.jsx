import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [method, setMethod] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // OTP method load from localStorage (sms/email)
    const savedMethod = localStorage.getItem("otpMethod");
    if (savedMethod) {
      setMethod(savedMethod);
    } else {
      navigate("/login"); // if no method, redirect back
    }
  }, [navigate]);

  const handleVerify = (e) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    setIsVerifying(true);

    // Fake OTP check (you can replace with API call)
    setTimeout(() => {
      if (otp === "123456") {
        alert("✅ Login Successful!");
        localStorage.removeItem("otpMethod"); // clear after success
        navigate("/"); // go to dashboard or home
      } else {
        alert("❌ Invalid OTP. Try again!");
      }
      setIsVerifying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Enter OTP
        </h2>
        <p className="text-center text-gray-600">
          We sent an OTP to your {method === "sms" ? "phone" : "email"}.
        </p>

        {/* OTP Input */}
        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-center tracking-widest text-lg"
            placeholder="Enter 6-digit OTP"
          />

          {/* Verify Button */}
          <button
            type="submit"
            disabled={isVerifying}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
              isVerifying
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary-600 hover:bg-primary-700"
            }`}
          >
            {isVerifying ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* Resend OTP */}
        <div className="text-center">
          <button
            onClick={() => alert("📩 New OTP Sent!")}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
