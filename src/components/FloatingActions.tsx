import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingActions = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919022222966?text=Hello%2C%20I%20need%20legal%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" fill="currentColor" />
      </motion.a>

      {/* Sticky Mobile Call Bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-accent shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <a
          href="tel:+919022222966"
          className="flex items-center justify-center gap-2 py-4 text-primary font-semibold"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          Call Now: +91 90222 22966
        </a>
      </motion.div>
    </>
  );
};
