import { CheckCircle, Clock, Shield, Users, Award, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "500+ successful cases across Mumbai courts with a high success rate.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "You speak directly with the advocate, not assistants or junior staff.",
  },
  {
    icon: Shield,
    title: "Complete Transparency",
    description: "Clear fee structure with no hidden costs. Know your expenses upfront.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day consultation available. We understand legal matters are urgent.",
  },
  {
    icon: Headphones,
    title: "Accessible Support",
    description: "Easy communication via phone, WhatsApp, or in-person meetings.",
  },
  {
    icon: CheckCircle,
    title: "Result-Driven",
    description: "Strategic approach focused on achieving the best outcome for your case.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container-legal">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Legal Expertise You Can{" "}
              <span className="text-accent">Trust</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At N M Legal Associates, we understand that legal issues can be
              overwhelming. That's why Advocate Navnish Mishra personally handles
              every case with dedication, ensuring you receive the attention and
              expertise your matter deserves.
            </p>
            <div className="p-6 rounded-xl bg-primary text-primary-foreground">
              <p className="font-display text-lg font-semibold mb-2">
                "Need Legal Help Today?"
              </p>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Speak Directly With an Advocate — Not an Assistant.
              </p>
              <a
                href="tel:+919022222966"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                Call +91 90222 22966
              </a>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-lg bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <reason.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
