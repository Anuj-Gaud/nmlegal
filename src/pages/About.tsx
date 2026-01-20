import { Layout } from "@/components/layout/Layout";
import { Scale, Award, Users, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { CTABanner } from "@/components/home/CTABanner";

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description: "We uphold the highest ethical standards in every case we handle.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your needs drive our strategy. We listen, understand, and act.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional legal outcomes consistently.",
  },
  {
    icon: Scale,
    title: "Transparency",
    description: "Clear communication on fees, timelines, and case progress.",
  },
];

const achievements = [
  "15+ years of legal practice in Mumbai courts",
  "500+ successfully resolved cases",
  "Expertise in Maharashtra property and civil laws",
  "Bar Council of Maharashtra certified advocate",
  "Specialization in family, criminal, and property law",
  "Strong network across Mumbai, Thane & Navi Mumbai courts",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-legal">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                About Us
              </p>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Meet Advocate{" "}
                <span className="text-accent">Navnish Mishra</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of dedicated legal practice, Advocate Navnish 
                Mishra has established N M Legal Associates as a trusted name in 
                Mumbai's legal landscape. Specializing in family law, criminal 
                defense, property disputes, and civil litigation.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Based in Ghatkopar East, we serve clients across Mumbai, Thane, 
                and Navi Mumbai. Our approach combines deep legal expertise with 
                genuine care for our clients' wellbeing. Every case receives 
                personal attention from Advocate Mishra himself, ensuring you're 
                never just another file on a desk.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Bar Council of Maharashtra</p>
                  <p className="text-sm text-muted-foreground">Licensed Practicing Advocate</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl bg-primary overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    Advocate Navnish Mishra
                  </p>
                  <p className="text-accent">Founder, N M Legal Associates</p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-legal">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
            >
              Our Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl lg:text-4xl font-bold text-foreground"
            >
              The Principles That Guide Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container-legal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Our Track Record
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Experience That Matters
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our success is measured not just in cases won, but in the trust 
                our clients place in us and the peace of mind we provide during 
                challenging times.
              </p>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={achievement}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-xl bg-primary text-center">
                <p className="font-display text-4xl font-bold text-accent mb-2">15+</p>
                <p className="text-sm text-primary-foreground/80">Years Experience</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <p className="font-display text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Cases Handled</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <p className="font-display text-4xl font-bold text-accent mb-2">5.0</p>
                <p className="text-sm text-muted-foreground">Client Rating</p>
              </div>
              <div className="p-6 rounded-xl bg-primary text-center">
                <p className="font-display text-4xl font-bold text-accent mb-2">47+</p>
                <p className="text-sm text-primary-foreground/80">Google Reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default About;
