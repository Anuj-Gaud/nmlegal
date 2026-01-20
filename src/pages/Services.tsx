import { Layout } from "@/components/layout/Layout";
import { 
  Users, 
  Gavel, 
  Scale, 
  FileText, 
  Home, 
  FileCheck,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    id: "divorce",
    icon: Users,
    title: "Divorce & Family Law",
    description: "Compassionate and strategic legal support for all family matters.",
    problems: [
      "Going through a painful divorce process",
      "Child custody and visitation disputes",
      "Alimony and maintenance issues",
      "Domestic violence and protection orders",
      "Property division during separation",
    ],
    solutions: [
      "Mutual consent divorce with minimal conflict",
      "Contested divorce proceedings",
      "Child custody arrangements prioritizing child welfare",
      "Fair alimony negotiation and court representation",
      "Domestic violence case filing and protection",
    ],
    whyUs: "Advocate Navnish Mishra handles sensitive family matters with discretion and empathy while fighting vigorously for your rights.",
  },
  {
    id: "criminal",
    icon: Gavel,
    title: "Criminal Defense",
    description: "Aggressive defense to protect your rights and freedom.",
    problems: [
      "Facing criminal charges or FIR",
      "Need urgent bail assistance",
      "False accusations affecting your reputation",
      "Investigation or police proceedings",
      "Appeals against conviction",
    ],
    solutions: [
      "Immediate bail applications at all court levels",
      "Strategic defense preparation for trials",
      "Anticipatory bail to prevent arrest",
      "Quashing of FIRs and false cases",
      "Appeal proceedings in higher courts",
    ],
    whyUs: "With experience across Mumbai criminal courts, we provide swift action when your freedom is at stake.",
  },
  {
    id: "property",
    icon: Home,
    title: "Property Law",
    description: "Comprehensive legal solutions for all real estate matters.",
    problems: [
      "Property title disputes and unclear ownership",
      "Illegal possession or encroachment",
      "Tenant eviction issues",
      "Property documentation problems",
      "Inheritance and succession disputes",
    ],
    solutions: [
      "Title verification and due diligence",
      "Property dispute resolution and litigation",
      "Eviction suits and landlord-tenant matters",
      "Complete property documentation services",
      "Succession and inheritance case handling",
    ],
    whyUs: "Deep expertise in Maharashtra property laws ensures your real estate interests are protected.",
  },
  {
    id: "cheque",
    icon: FileText,
    title: "Cheque Bounce Cases (NI Act 138)",
    description: "Swift legal action to recover your money from dishonored cheques.",
    problems: [
      "Cheque returned due to insufficient funds",
      "Payment stopped without valid reason",
      "Account closed or frozen",
      "Signature mismatch disputes",
      "Repeated defaults by issuer",
    ],
    solutions: [
      "Immediate legal notice within 30 days",
      "Filing complaint under Section 138 NI Act",
      "Criminal prosecution of defaulter",
      "Recovery of cheque amount plus interest",
      "Compensation claims for damages",
    ],
    whyUs: "We have a high success rate in cheque bounce cases with swift recovery of funds.",
  },
  {
    id: "civil",
    icon: Scale,
    title: "Civil Litigation",
    description: "Strategic representation for all civil disputes and commercial matters.",
    problems: [
      "Contract breaches and disputes",
      "Money recovery and debt collection",
      "Injunction and restraining orders needed",
      "Commercial and business disputes",
      "Consumer complaints and grievances",
    ],
    solutions: [
      "Civil suit filing and court representation",
      "Recovery suits for unpaid dues",
      "Injunction applications for urgent relief",
      "Mediation and settlement negotiations",
      "Consumer forum proceedings",
    ],
    whyUs: "Our strategic approach to civil litigation maximizes your chances of a favorable outcome.",
  },
  {
    id: "agreements",
    icon: FileCheck,
    title: "Agreement Services",
    description: "Professional drafting and registration of all legal agreements.",
    problems: [
      "Need Leave & Licence agreement for rental",
      "Property sale deed drafting",
      "Partnership or business agreements",
      "Document registration requirements",
      "Legal compliance for agreements",
    ],
    solutions: [
      "Online Leave & Licence agreement with registration",
      "Sale deed and transfer deed preparation",
      "Rent agreement drafting and registration",
      "Doorstep document collection and delivery",
      "Complete registration assistance at Sub-Registrar",
    ],
    whyUs: "Convenient doorstep service with complete legal compliance guaranteed.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container-legal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Our Practice Areas
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Comprehensive Legal Services
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From family disputes to property matters, we provide expert legal 
              solutions tailored to your specific needs across Mumbai, Thane & Navi Mumbai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-legal">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  {/* Problems */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                      Common Problems We Solve
                    </h3>
                    <ul className="space-y-2">
                      {service.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Choose Us */}
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <p className="text-sm font-semibold text-accent mb-1">Why Choose Us</p>
                    <p className="text-foreground">{service.whyUs}</p>
                  </div>
                </div>

                {/* Solutions Card */}
                <div className={`p-6 lg:p-8 rounded-2xl bg-card border border-border ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    Our Solutions
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="cta" asChild className="flex-1">
                      <a href="tel:+919022222966">
                        <Phone className="w-4 h-4" />
                        Call to Discuss
                      </a>
                    </Button>
                    <Button variant="whatsapp" asChild className="flex-1">
                      <a
                        href={`https://wa.me/919022222966?text=Hello%2C%20I%20need%20help%20with%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container-legal text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get a free initial consultation to understand your legal options.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+919022222966">
                  <Phone className="w-5 h-5" />
                  Free Consultation Call
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
