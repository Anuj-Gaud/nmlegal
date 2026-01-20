import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTABanner = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-legal relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Need Legal Help Today?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Speak <strong className="text-accent">directly</strong> with Advocate Navnish Mishra — not an assistant.
            Get clear answers and a path forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+919022222966">
                <Phone className="w-5 h-5" />
                Call Now: +91 90222 22966
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/919022222966?text=Hello%2C%20I%20need%20legal%20consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Available Monday to Saturday, 9:00 AM - 7:00 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
};
