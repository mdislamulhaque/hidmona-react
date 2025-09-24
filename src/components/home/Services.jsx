import { motion } from "framer-motion";
import {
  Globe,
  ArrowLeftRight,
  Smartphone,
  Wallet,
  CreditCard,
  Zap,
  Award,
  ZoomIn,
  ArrowRight,
  Flashlight,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Custom Icon Component with gradient support
const GradientIcon = ({ icon: Icon, gradient, size = 24 }) => (
  <div
    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center mr-4 shadow-lg`}
  >
    <Icon size={size} className="text-white" />
  </div>
);

export default function Services() {
  const services = [
    {
      title: "International Money Transfer",
      icon: Globe,
      gradient: "bg-hidmona-gradient",
    },
    {
      title: "Cash and account remittances",
      icon: ArrowLeftRight,
      gradient: "bg-hidmona-gradient",
    },
    {
      title: "Online Portal and Mobile app for ease of use",
      icon: Smartphone,
      gradient: "bg-hidmona-gradient",
    },
    {
      title: "Mobile Money Transfer",
      icon: Wallet,
      gradient: "bg-hidmona-gradient",
    },
    {
      title: "Issuing Debit Card services",
      icon: CreditCard,
      gradient: "bg-hidmona-gradient",
    },
  ];

  const images = [
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-01.jpg",
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-02.jpg",
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-03.jpg",
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-04.jpg",
  ];

  return (
    <motion.section
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-pink-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-2 bg-primary-600/10 text-primary-600 rounded-full text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <Zap size={16} className="mr-2" />
            Our Services
          </motion.span>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Premium Financial Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience seamless banking with our cutting-edge services designed
            for the modern world
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          {/* Left Column - Services */}
          <div className="lg:w-1/2">
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
                <Flashlight size={28} className="text-yellow-500 mr-3" />
                Core Services We Provide
              </h3>

              <div className="space-y-4">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    className="group relative"
                    variants={listItemVariants}
                    custom={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                    <div className="relative flex items-center p-4 rounded-2xl border border-gray-100 bg-white/50 group-hover:bg-transparent transition-all duration-300">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <GradientIcon
                          icon={service.icon}
                          gradient={service.gradient}
                          size={24}
                        />
                      </motion.div>
                      <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300 flex-1">
                        {service.title}
                      </span>
                      <motion.div
                        className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              {/* <motion.button
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore All Services
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button> */}
            </motion.div>
          </div>

          {/* Right Column - Images */}
          <div className="lg:w-1/2">
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="float"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {images.map((src, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    variants={imageVariants}
                    custom={i}
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <div className="absolute inset-0 border-2 border-white/30 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                    <img
                      src={src}
                      alt={`Modern Banking ${i + 1}`}
                      className="w-full h-64 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-hidmona-gradient text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring" }}
                viewport={{ once: true }}
              >
                <Award size={20} className="mr-2" />
                <span className="font-semibold">Trusted Worldwide</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              className="grid grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "50M+", label: "Transactions", icon: ArrowLeftRight },
                { number: "150+", label: "Countries", icon: Globe },
                { number: "24/7", label: "Support", icon: Smartphone },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon size={20} className="text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
