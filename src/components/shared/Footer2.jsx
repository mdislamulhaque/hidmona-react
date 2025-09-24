import { motion } from "framer-motion";

export default function Footer2() {
  return (
    <footer className="pt-24 bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.6,
                ease: "easeOut",
                delay:0.3
              },
            },
          }}
        >
          {/* Logo & Contact */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-6">
              <a href="/" className="inline-block mb-4">
                <img src="/logo/hidmon-log.png" alt="logo" className="h-10" />
              </a>
              <ul className="mb-2 text-sm">
                <li>
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:support@hidmona.ch" className="text-blue-600">
                    support@hidmona.ch
                  </a>
                </li>
              </ul>
              <p className="mb-4 text-sm">
                To get exclusive updates and benefits.
              </p>
              <ul className="flex flex-wrap space-x-3 text-xl">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61557692010880"
                    target="_blank"
                  >
                    <i className="ri-facebook-fill" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Hidmona2" target="_blank">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hidmonafs" target="_blank">
                    <i className="ri-instagram-line" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/hidmona-financial-services-a90a09277"
                    target="_blank"
                  >
                    <i className="ri-linkedin-line" />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/41763000000" target="_blank">
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@hidmona.financial?_t=8lY3jNA27dZ&_r=1"
                    target="_blank"
                  >
                    <i className="fa-brands fa-tiktok" />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Mobile App Download */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Download Mobile App</h3>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <a
                  href="https://apps.apple.com/us/app/hidmona-money-transfer/id1629064572"
                  target="_blank"
                >
                  <img
                    src="/public/images/Download-Apple-Icon.png"
                    alt="App Store"
                    className=" h-12"
                  />
                </a>
                <img
                  src="/images/app-store-qr.jpg"
                  alt="App Store QR"
                  className="h-32 mt-2"
                />
              </div>
              <div className="w-1/2 px-2 mb-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mahmud.hidmona&pli=1"
                  target="_blank"
                >
                  <img
                    src="/public/images/Download-Android-Icon.png"
                    alt="Google Play"
                    className="h-12"
                  />
                </a>
                <img
                  src="/images/play-store-qr.jpg"
                  alt="Play Store QR"
                  className="h-32 mt-2"
                />
              </div>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/termsandcondition" className="hover:underline">
                  Terms and Condition
                </a>
              </li>
              <li>
                <a href="/cancellationandrefund" className="hover:underline">
                  Refund Policy
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Payment Acceptance */}
          <motion.div
            className="w-full md:w-1/2 lg:w-1/4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-lg font-semibold mb-4">
              Card Payment Acceptance
            </h3>
            <img
              src="/images/trastpay-payment-accept.png"
              alt="Payments"
              className="max-w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="mt-10 bg-gray-200 text-center py-4 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p>
          © 2023
          <a href="#" className="text-blue-600 hover:underline">
            Vivacom
          </a>{" "}
          - All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
