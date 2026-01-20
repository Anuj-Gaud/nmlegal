import { Layout } from "@/components/layout/Layout";
import { Star, Quote, ThumbsUp, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rajesh Sharma",
    location: "Ghatkopar",
    rating: 5,
    date: "2 weeks ago",
    text: "Advocate Navnish handled my property dispute case with exceptional expertise. His knowledge of Maharashtra property laws is remarkable. He explained everything clearly and kept me updated throughout. The case was resolved in my favor. Highly recommended!",
    case: "Property Dispute",
    helpful: 12,
  },
  {
    name: "Priya Mehta",
    location: "Thane",
    rating: 5,
    date: "1 month ago",
    text: "During my divorce proceedings, Advocate Mishra was both compassionate and professional. He understood the emotional difficulty and handled everything with sensitivity while ensuring my rights were protected. Got fair alimony and custody arrangements.",
    case: "Divorce & Custody",
    helpful: 18,
  },
  {
    name: "Amit Patel",
    location: "Navi Mumbai",
    rating: 5,
    date: "3 weeks ago",
    text: "Got my cheque bounce case resolved quickly. The team was responsive and kept me updated at every step. Recovered my entire amount plus interest. Excellent legal service and very professional approach.",
    case: "Cheque Bounce",
    helpful: 9,
  },
  {
    name: "Sunita Deshmukh",
    location: "Mulund",
    rating: 5,
    date: "1 month ago",
    text: "Needed urgent bail for a family member. Advocate Navnish acted immediately and got bail within 24 hours. His quick thinking and court experience made all the difference. Forever grateful for his help.",
    case: "Criminal Bail",
    helpful: 22,
  },
  {
    name: "Vikram Singh",
    location: "Chembur",
    rating: 5,
    date: "2 months ago",
    text: "Very professional service for our leave and licence agreement. Doorstep pickup and delivery, completed registration within 2 days. Much easier than I expected. Will use again for future property needs.",
    case: "Agreement Registration",
    helpful: 7,
  },
  {
    name: "Anita Joshi",
    location: "Kurla",
    rating: 5,
    date: "3 months ago",
    text: "Fought my property inheritance case for 2 years. Finally found N M Legal Associates and got resolution within 6 months. Advocate Mishra's strategy and knowledge of succession laws won us the case.",
    case: "Property Inheritance",
    helpful: 15,
  },
  {
    name: "Mohammed Khan",
    location: "Ghatkopar East",
    rating: 5,
    date: "1 month ago",
    text: "Best advocate in Ghatkopar area. Handled my civil recovery suit efficiently. Regular updates, clear fee structure, no hidden costs. Recovered my money with interest. Highly trustworthy.",
    case: "Civil Recovery",
    helpful: 11,
  },
  {
    name: "Deepa Kulkarni",
    location: "Thane West",
    rating: 5,
    date: "2 months ago",
    text: "Needed help with domestic violence case. Advocate was very supportive and got protection order quickly. Made a difficult situation much easier to handle. Thank you for your compassion.",
    case: "Domestic Violence",
    helpful: 19,
  },
  {
    name: "Rakesh Verma",
    location: "Powai",
    rating: 5,
    date: "4 months ago",
    text: "Excellent service for company agreement drafting. Thorough review, protected our interests well. Advocate explained all clauses in simple terms. Very satisfied with the outcome.",
    case: "Business Agreement",
    helpful: 8,
  },
];

const Reviews = () => {
  const totalReviews = 47;
  const averageRating = 5.0;

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
              Client Testimonials
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              What Our Clients Say
            </h1>
            
            {/* Rating Summary */}
            <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-navy-light/30 border border-navy-light/50">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary-foreground mb-1">
                {averageRating} out of 5
              </p>
              <p className="text-primary-foreground/70">
                Based on {totalReviews}+ Google Reviews
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-legal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative p-6 rounded-xl bg-card border border-border"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10" />
                
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg flex-shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.location} • {review.date}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                    {review.case}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Helpful */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  {review.helpful} found this helpful
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Showing {reviews.length} of {totalReviews}+ reviews
            </p>
            <a
              href="https://g.page/nmlegalassociates/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              View All on Google
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="container-legal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Experience Our Service?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our satisfied clients. Get professional legal help today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="xl" asChild>
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
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
