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
    }, 4000); // প্রতি 4 সেকেন্ডে slide change হবে
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] lg:h-screen overflow-hidden">
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
          <div className="absolute inset-0 flex items-center justify-end right-36 text-center text-white px-4">
            <div className="max-w-3xl hidden md:block">
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
          <TransferForm/>
    </section>
  );
}
