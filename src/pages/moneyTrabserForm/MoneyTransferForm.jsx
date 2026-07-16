import { useState, useEffect } from "react";
import { useLocation } from "react-router"; 
 
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import TransferForm from "../../components/home/heroSection/TransferForm";

export default function MoneyTransferForm() {
  const location = useLocation();
  const [step, setStep] = useState(1); // শুরু হবে ১ম স্টেপ থেকেই
  const [formData, setFormData] = useState({}); 

  // হোম পেজ থেকে আসা ডেটা শুধুমাত্র স্টেটের মধ্যে সেভ করে রাখা হচ্ছে
  useEffect(() => {
    if (location.state && location.state.initialFormData) {
      setFormData(location.state.initialFormData);
      // এখানে আগে setStep(2) ছিল, যা রিমুভ করা হয়েছে। 
      // এর ফলে ইউজার ১ম স্টেপেই থাকবে এবং ডেটা এডিট করতে পারবে।
    }
  }, [location.state]);

  // ১ম স্টেপের (TransferForm) বাটনে ক্লিক করলে এই ফাংশনটি ২য় স্টেপে নিয়ে যাবে
  const handleStep1Next = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2); // এবার ইউজার "Send Now" ক্লিক করলে ২য় স্টেপে যাবে
  };

  const handleStep2Next = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3); 
  };

  const handlePrev = () => setStep((s) => s - 1);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      
      {/* Step 1: হোম পেজের ডেটা সহ এই ফর্মটিই লোড হবে এবং ইউজার এডিট করতে পারবে */}
      {step === 1 && <TransferForm onNext={handleStep1Next} />}
      
      {/* Step 2: Recipients */}
      {step === 2 && <Step2 onNext={handleStep2Next} onPrev={handlePrev} />}
      
      {/* Step 3 */}
      {step === 3 && (
        <Step3
          onPrev={() => setStep(2)}
          onNext={(data) => {
            setFormData((prev) => ({ ...prev, ...data }));
            console.log("All Data:", { ...formData, ...data });
            setStep(4);
          }}
        />
      )}
      
      {/* Step 4 */}
      {step === 4 && (
        <Step4
          formData={formData}
          onPrev={() => setStep(3)}
          onSubmit={(data) => {
            console.log("✅ All Data Submitted:", data);
            alert("Transfer Submitted Successfully!");
            setStep(5);
          }}
        />
      )}
      
      {/* Step 5 */}
      {step === 5 && (
        <Step5
          formData={formData}
          onPrev={() => setStep(4)}
          onPay={(data) => {
            setFormData(data);
          }}
        />
      )}

    </div>
  );
}