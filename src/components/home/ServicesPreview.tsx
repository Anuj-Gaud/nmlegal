import { Link } from "react-router-dom";
import { 
  Scale, 
  Gavel, 
  Home, 
  FileText, 
  Users, 
  FileCheck,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Users,
    title: "Divorce & Family Law",
    description: "Expert guidance through divorce, custody, alimony, and domestic disputes with sensitivity and discretion.",
    href: "/services#divorce",
  },
  {
    icon: Gavel,
    title: "Criminal Defense",
    description: "Aggressive defense in criminal matters including bail, trials, and appeals across Mumbai courts.",
    href: "/services#criminal",
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Comprehensive property dispute resolution, title verification, and real estate documentation.",
    href: "/services#property",
  },
  {
    icon: FileText,
    title: "Cheque Bounce Cases",
    description: "Swift legal action under NI Act 138 to recover your money from dishonored cheques.",
    href: "/services#cheque",
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "Strategic representation in civil suits, injunctions, recovery matters, and commercial disputes.",
    href: "/services#civil",
  },
  {
    icon: FileCheck,
    title: "Agreement Services",
    description: "Online Leave & Licence, Sale Deeds, Rental Agreements with doorstep registration.",
    href: "/services#agreements",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-legal">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
          >
            Our Practice Areas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            Legal Services We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            From family disputes to property matters, we provide comprehensive legal
            solutions tailored to your needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block h-full p-6 lg:p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
