import { useState, useEffect } from "react";
import { useLocation } from "react-router"; 
import { CheckCircle2 } from "lucide-react"; // সুন্দর টিক চিহ্নের জন্য লুসিড আইকন

import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import TransferForm from "../../components/home/heroSection/TransferForm";

export default function MoneyTransferForm() {
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(1); // বর্তমানে কোন স্টেপ খোলা আছে
  const [completedSteps, setCompletedSteps] = useState([]); // কোন কোন স্টেপ কমপ্লিট হয়েছে
  const [formData, setFormData] = useState({}); 

  // হোম পেজ থেকে ডেটা আসলে তা সেট করার জন্য
  useEffect(() => {
    if (location.state && location.state.initialFormData) {
      setFormData(location.state.initialFormData);
    }
  }, [location.state]);

  // স্টেপ কমপ্লিট করার হ্যান্ডলার
  const handleStepComplete = (stepNumber, data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    
    // কমপ্লিটেড লিস্টে যুক্ত করা (ডুপ্লিকেট এড়াতে চেক)
    if (!completedSteps.includes(stepNumber)) {
      setCompletedSteps((prev) => [...prev, stepNumber]);
    }
    
    // পরবর্তী স্টেপটি ওপেন করা
    setActiveStep(stepNumber + 1);
  };

  // যেকোনো হেডারে ক্লিক করে সেই স্টেপে যাওয়ার লজিক
  const handleHeaderClick = (stepNumber) => {
    // ইউজার চাইলে যেকোনো সময় আগের কমপ্লিট করা স্টেপ অথবা বর্তমান একটি স্টেপ ওপেন করতে পারবে
    if (stepNumber === 1 || completedSteps.includes(stepNumber - 1) || stepNumber <= activeStep) {
      setActiveStep(stepNumber);
    }
  };

  // প্রতিটি স্টেপের জন্য কমন হেডার ডিজাইন (Accordion Tab)
  const renderStepHeader = (stepNumber, title, summaryText) => {
    const isActive = activeStep === stepNumber;
    const isCompleted = completedSteps.includes(stepNumber);

    return (
      <div 
        onClick={() => handleHeaderClick(stepNumber)}
        className={`flex items-center justify-between p-4 cursor-pointer transition-all border-b border-gray-100 ${
          isActive 
            ? "bg-blue-50 text-blue-700 font-semibold" 
            : "bg-white text-gray-700 hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center space-x-3">
          {/* স্টেপ নাম্বার বা গ্রিন টিক আইকন */}
          {isCompleted && !isActive ? (
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
          ) : (
            <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
              isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}>
              {stepNumber}
            </span>
          )}
          <div>
            <span className="text-base">{title}</span>
            {/* কমপ্লিট হয়ে গেলে ছোট করে সামারি দেখানো (যেমন: Sweden to Bangladesh) */}
            {!isActive && isCompleted && summaryText && (
              <p className="text-xs text-gray-500 font-normal mt-0.5">{summaryText}</p>
            )}
          </div>
        </div>
        
        {!isActive && isCompleted && (
          <span className="text-xs text-blue-600 font-medium hover:underline">Edit</span>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Money Transfer</h2>

      {/* --- STEP 1: Amount & Country --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {renderStepHeader(
          1, 
          "Transfer Details", 
          formData.fromCountry ? `${formData.fromCountry} ➔ ${formData.toCountry} (${formData.sendingAmount} ${formData.fromCurrency})` : ""
        )}
        <div className={`transition-all duration-300 ${activeStep === 1 ? "block p-5" : "hidden"}`}>
          <TransferForm onNext={(data) => handleStepComplete(1, data)} />
        </div>
      </div>

      {/* --- STEP 2: Recipients --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {renderStepHeader(
          2, 
          "Recipient Information", 
          formData.recipientName ? `Send to: ${formData.recipientName}` : ""
        )}
        <div className={`transition-all duration-300 ${activeStep === 2 ? "block p-5" : "hidden"}`}>
          <Step2 
            onNext={(data) => handleStepComplete(2, data)} 
            onPrev={() => setActiveStep(1)} 
          />
        </div>
      </div>

      {/* --- STEP 3: Purpose / Additional Info --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {renderStepHeader(3, "Reason for Transfer", formData.reason)}
        <div className={`transition-all duration-300 ${activeStep === 3 ? "block p-5" : "hidden"}`}>
          <Step3
            onPrev={() => setActiveStep(2)}
            onNext={(data) => handleStepComplete(3, data)}
          />
        </div>
      </div>

      {/* --- STEP 4: Review --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {renderStepHeader(4, "Review & Confirm")}
        <div className={`transition-all duration-300 ${activeStep === 4 ? "block p-5" : "hidden"}`}>
          <Step4
            formData={formData}
            onPrev={() => setActiveStep(3)}
            onSubmit={(data) => handleStepComplete(4, data)}
          />
        </div>
      </div>

      {/* --- STEP 5: Payment --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {renderStepHeader(5, "Payment Method")}
        <div className={`transition-all duration-300 ${activeStep === 5 ? "block p-5" : "hidden"}`}>
          <Step5
            formData={formData}
            onPrev={() => setActiveStep(4)}
            onPay={(data) => {
              setFormData((prev) => ({ ...prev, ...data }));
              alert("Payment Successful!");
            }}
          />
        </div>
      </div>

    </div>
  );
}