import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Ghatkopar",
    rating: 5,
    text: "Advocate Navnish handled my property dispute case with expertise. His knowledge of Maharashtra property laws is exceptional. Highly recommended!",
    case: "Property Dispute",
  },
  {
    name: "Priya Mehta",
    location: "Thane",
    rating: 5,
    text: "During my divorce proceedings, Advocate Mishra was compassionate yet professional. He ensured my rights were protected throughout the process.",
    case: "Divorce & Custody",
  },
  {
    name: "Amit Patel",
    location: "Navi Mumbai",
    rating: 5,
    text: "Got my cheque bounce case resolved quickly. The team was responsive and kept me updated at every step. Excellent legal service!",
    case: "Cheque Bounce",
  },
];

export const TestimonialsPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-legal">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider mb-3"
          >
            Client Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">
              5.0 Rating from 47+ Reviews
            </span>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 lg:p-8 rounded-xl bg-card border border-border"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.case}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/reviews"
            className="text-accent font-semibold hover:underline"
          >
            Read All 47+ Reviews →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
