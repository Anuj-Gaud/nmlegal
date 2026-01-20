import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail,
  Send,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const legalIssues = [
  "Divorce & Family Law",
  "Criminal Defense",
  "Property Dispute",
  "Cheque Bounce Case",
  "Civil Litigation",
  "Agreement Registration",
  "Legal Consultation",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90222 22966",
    href: "tel:+919022222966",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 90222 22966",
    href: "https://wa.me/919022222966",
    action: "Chat Now",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@nmlegalassociates.com",
    href: "mailto:contact@nmlegalassociates.com",
    action: "Send Email",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Ghatkopar East, Mumbai, Maharashtra",
    href: "https://maps.google.com/?q=Ghatkopar+East+Mumbai",
    action: "Get Directions",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.issue) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and legal issue are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "We will contact you within 24 hours.",
    });
  };

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
              Get in Touch
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ready to discuss your legal matter? Reach out to us through any of the 
              channels below. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-legal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label === "Office" || info.label === "WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <info.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium text-foreground text-sm truncate">
                      {info.value}
                    </p>
                    <p className="text-xs text-accent font-semibold mt-1 group-hover:underline">
                      {info.action} →
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-legal">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Send Us an Inquiry
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-accent/10 border border-accent/30 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your inquiry has been submitted successfully. We will contact you 
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", issue: "", message: "" });
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-foreground mb-2">
                      Legal Issue *
                    </label>
                    <Select
                      value={formData.issue}
                      onValueChange={(value) => setFormData({ ...formData, issue: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your legal issue" />
                      </SelectTrigger>
                      <SelectContent>
                        {legalIssues.map((issue) => (
                          <SelectItem key={issue} value={issue}>
                            {issue}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Briefly describe your legal matter..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted regarding your legal matter.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Visit Our Office
              </h2>
              <p className="text-muted-foreground mb-6">
                Located in the heart of Ghatkopar East, easily accessible from across Mumbai.
              </p>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border mb-6 h-[300px] lg:h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30167.07363929856!2d72.89!3d19.086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6260e24e6d7%3A0x6c0d1c9c9e6e5c0!2sGhatkopar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Office Hours */}
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Office Hours</p>
                    <p className="text-sm text-muted-foreground">When we're available</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * For urgent matters, WhatsApp us anytime and we'll respond ASAP.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
