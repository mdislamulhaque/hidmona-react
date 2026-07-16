// slider.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    image:"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Bank-Level Security",
    subtitle: "Your money is protected with advanced encryption technology",
    image:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    // মোবাইলে h-auto অথবা min-h-[90vh] করা হয়েছে যাতে ফর্মটি ওভারফ্লো না করে
    <section className="relative w-full min-h-[100vh] lg:h-screen flex flex-col md:block overflow-hidden bg-gray-100">
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
            {/* Background Image */}
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0  items-center justify-end right-6 text-center text-white px-4 hidden lg:flex">
              <div className="max-w-2xl hidden md:block">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl opacity-90">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* মোবাইলের ব্যাকগ্রাউন্ড ব্যানার ও টেক্সট */}
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

      {/* Transfer Form Wrapper */}
      <div className="relative md:absolute md:top-1/2 md:left-12 lg:left-24 md:transform md:-translate-y-1/2 w-full md:w-[480px] lg:w-[520px] px-4 py-6 md:p-0 z-40">
        <TransferForm />
      </div>
    </section>
  );
}