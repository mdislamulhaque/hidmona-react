import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Transaction from "../dashboard/Transaction";

export default function MoneyTransferForm() {
  const [step, setStep] = useState(1); // track current step
  const [formData, setFormData] = useState({}); // store collected data

  const handleStep1Next = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2); // move to Step 2
  };

  const handleStep2Next = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3); // ✅ move to Step 3
  };

  const handlePrev = () => setStep((s) => s - 1);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      {step === 1 && <Step1 onNext={handleStep1Next} />}
      {step === 2 && <Step2 onNext={handleStep2Next} onPrev={handlePrev} />}
      {step === 3 && (
        <Step3
          onPrev={() => setStep(2)}
          onNext={(data) => {
            setFormData((prev) => ({ ...prev, ...data }));
            console.log("All Data:", { ...formData, ...data });
            // proceed to confirmation or API call
            setStep(4);
          }}
        />
      )}
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
