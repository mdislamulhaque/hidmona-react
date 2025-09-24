// CardIssue.jsx
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, IdCard, UserCheck } from "lucide-react";


// animation variants (uses custom for stagger by index)
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.18,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

// fake data array — add/remove steps easily here
const steps = [
  {
    id: 1,
    Icon: UserCheck,
    title: "Open a Personal or Company Account",
    description:
      "Complete your signup process by opening a personal or company account with Hidmona Financial Service.",
  },
  {
    id: 2,
    Icon: IdCard,
    title: "Verify your identity",
    description:
      "Verify your personal and/or company documents to unlock the Debit card services we offer.",
  },
  {
    id: 3,
    Icon: CreditCard,
    title: "Apply and get your debit card",
    description:
      "Once you complete ID verification, apply for a debit card and it will be issued based on your country.",
  },
];

export default function CardIssue() {
  return (
    <section className="bg-[#fafafb] pt-24 pb-20 lg:px-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-secondary">
            Simplified Card Issuing Process
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center text-center">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={step.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-primary text-7xl">
                    {/* Lucide icon as component */}
                    <Icon className="w-14 h-14 text-primary-600" aria-hidden="true" />
                  </div>
                </div>

                <h4 className="text-xl font-medium mb-2 text-secondary">
                  {step.title}
                </h4>

                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
