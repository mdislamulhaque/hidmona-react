import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router"; // রাউটিং এর জন্য ইম্পোর্ট
import TransferForm from "./TransferForm";

const slides = [
  {
    title: "Fast & Secure Money Transfer",
    subtitle: "Send money anywhere in minutes with the best exchange rates",
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Global Network Coverage",
    subtitle: "Connect with over 200 countries and territories worldwide",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Bank-Level Security",
    subtitle: "Your money is protected with advanced encryption technology",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // নেভিগেশন হুক

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // হোম পেজের ফর্ম সাবমিট হলে এই ফাংশনটি কাজ করবে
  const handleHomeFormSubmit = (formData) => {
    // সরাসরি ড্যাশবোর্ড রাউটে পাঠাবে এবং স্টেটের মাধ্যমে ডেটা সাথে নিয়ে যাবে
    navigate("/dashboard", { state: { initialFormData: formData } });
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen flex flex-col md:block overflow-hidden bg-gray-100">
      
      {/* Background Image Slider (Desktop) */}
      <div className="absolute inset-0 hidden md:block">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Banner */}
      <div className="relative w-full h-[35vh] md:hidden">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-2xl font-bold text-white mb-2 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xs text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-40 w-full h-full flex flex-col md:absolute md:inset-0 md:flex-row md:items-center md:justify-center lg:justify-between px-4 py-6 md:p-8 lg:px-16 xl:px-24">
        
        {/* Left Side: Text Box */}
        <div className="hidden lg:block lg:w-1/2 text-white pr-8 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg xl:text-xl text-gray-200">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Transfer Form */}
        <div className="w-full md:w-[480px] lg:w-[500px] xl:w-[540px] flex justify-center lg:justify-end mx-auto lg:mx-0">
          <TransferForm onNext={handleHomeFormSubmit} />
        </div>

      </div>

    </section>
  );
}