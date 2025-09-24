import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.45 },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1 + 0.2, duration: 0.5 },
  }),
};

export default function Services() {
  const services = [
    "International Money Transfer",
    "Cash and account remittances",
    "Online Portal and Mobile app for ease of use",
    "Mobile Money Transfer",
    "Issuing Debit Card services",
  ];

  const images = [
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-01.jpg",
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-02.jpg",
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-03.jpg",
    "https://dev.hidmona.ch/assets/images/why-choose-us/choose-04.jpg",
  ];

  return (
    <motion.section
      className="md:py-24 py-8  md:px-12 bg-[#f7f7f7]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-12 ">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left Column */}
          <div className="lg:w-1/2 w-full mb-12 lg:mb-0 lg:pr-8">
            <h3 className="text-3xl font-medium text-secondary mb-6">
              We provide the following services
            </h3>

            <ul className="space-y-4 text-gray-700">
              {services.map((text, i) => (
                <motion.li
                  key={i}
                  className="flex items-start bg-white  rounded-full p-3"
                  variants={listItemVariants}
                  custom={i}
                >
                  <i className="ri-checkbox-circle-line text-red-500 text-xl mr-2" />
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 w-full">
            <div className="grid md:grid-cols-2 gap-4">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg shadow-md overflow-hidden"
                  variants={imageVariants}
                  custom={i}
                >
                  <img
                    src={src}
                    alt={`Choose 0${i + 1}`}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
