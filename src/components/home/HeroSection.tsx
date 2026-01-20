import { Phone, MessageCircle, Star, Shield, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: Star, label: "5.0 Rating", sublabel: "47+ Google Reviews" },
  { icon: Users, label: "500+", sublabel: "Cases Handled" },
  { icon: MapPin, label: "Mumbai Based", sublabel: "Local Expertise" },
  { icon: Shield, label: "15+ Years", sublabel: "Experience" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      <div className="container-legal relative z-10 py-16 lg:py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-primary-foreground">
                Rated 5.0 by 47+ Clients
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Trusted Legal Solutions{" "}
              <span className="text-gradient-gold">in Mumbai</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Professional, transparent and result-driven legal services by{" "}
              <strong className="text-accent">Advocate Navnish Mishra</strong>.
              Serving Mumbai, Thane & Navi Mumbai with expertise in Divorce, Criminal,
              Property & Civil Law.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+919022222966">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/919022222966?text=Hello%2C%20I%20need%20legal%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Consultation
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-navy-light/30 border border-navy-light/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground text-sm">
                      {badge.label}
                    </p>
                    <p className="text-xs text-primary-foreground/60">
                      {badge.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
