import { motion } from "framer-motion";
import {
  Globe,
  ArrowLeftRight,
  Smartphone,
  Wallet,
  CreditCard,
  Zap,
  Award,
  ArrowRight,
  Flashlight,
  Users,
  Shield,
  Clock,
  TrendingUp,
  Mail,
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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

const floatingVariants = {
  float: {
    y: [-8, 8, -8],
    transition: {
      duration: 3,
      repeat: false,
      ease: "easeInOut",
    },
  },
};

// Custom Icon Component with gradient support
const GradientIcon = ({ icon: Icon, gradient, size = 24 }) => (
  <div
    className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center shadow-lg mb-4`}
  >
    <Icon size={size} className="text-white" />
  </div>
);

export default function Services2() {
  const services = [
    {
      title: "International Money Transfer",
      description:
        "Send and receive money across borders with competitive exchange rates and low fees.",
      icon: Globe,
      gradient: "bg-hidmona-gradient",
      features: ["Fast Transfer", "Low Fees", "150+ Countries"],
      stats: { value: "50M+", label: "Transactions" },
    },
    {
      title: "Cash and Account Remittances",
      description:
        "Easy cash pickup and direct bank account transfers for your convenience.",
      icon: ArrowLeftRight,
      gradient: "bg-hidmona-gradient",
      features: ["Instant Processing", "Multiple Options", "24/7 Service"],
      stats: { value: "99.9%", label: "Success Rate" },
    },
    {
      title: "Digital Banking Platform",
      description:
        "User-friendly online portal and mobile app for seamless banking experience.",
      icon: Smartphone,
      gradient: "bg-hidmona-gradient",
      features: ["Mobile App", "Web Portal", "Real-time Tracking"],
      stats: { value: "1M+", label: "Active Users" },
    },
    {
      title: "Mobile Money Transfer",
      description:
        "Transfer money directly to mobile wallets instantly and securely.",
      icon: Wallet,
      gradient: "bg-hidmona-gradient",
      features: ["Instant Transfer", "Mobile Wallets", "Secure"],
      stats: { value: "24/7", label: "Availability" },
    },
    {
      title: "Debit Card Services",
      description:
        "Issue personalized debit cards with advanced security features.",
      icon: CreditCard,
      gradient: "bg-hidmona-gradient",
      features: ["Visa/Mastercard", "Contactless", "Zero Liability"],
      stats: { value: "500K+", label: "Cards Issued" },
    },
  ];

  const serviceCards = [
    {
      icon: Users,
      title: "Customer Support",
      value: "24/7",
      description: "Round the clock customer service",
    },
    {
      icon: Shield,
      title: "Security",
      value: "100%",
      description: "Encrypted transactions",
    },
    {
      icon: Clock,
      title: "Processing Time",
      value: "< 1min",
      description: "Average transfer speed",
    },
    {
      icon: TrendingUp,
      title: "Satisfaction",
      value: "98%",
      description: "Customer happiness rate",
    },
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

        <div className="">
          {/* Left Column - Services List */}
         

          {/* Right Column - Service Cards */}
          <div className="">
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="float"
            >
              {/* Service Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    className="group relative"
                    variants={cardVariants}
                    custom={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/20 h-full hover:shadow-2xl transition-all duration-300">
                      {/* Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <GradientIcon
                          icon={service.icon}
                          gradient={service.gradient}
                          size={28}
                        />
                        <motion.span
                          className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {service.stats.value}
                        </motion.span>
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-500"
                          >
                            <div className="w-2 h-2 bg-hidmona-gradient rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      {/* <motion.button
                        className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-xl font-medium hover:bg-hidmona-gradient hover:text-white transition-all duration-300 flex items-center justify-center group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </motion.button> */}
                    </div>
                  </motion.div>
                ))}
              </div>

             

             
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
