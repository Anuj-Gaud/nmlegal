import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Scale, Clock } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Divorce & Family Law", path: "/services#divorce" },
    { name: "Criminal Defense", path: "/services#criminal" },
    { name: "Property Law", path: "/services#property" },
    { name: "Cheque Bounce Cases", path: "/services#cheque" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Client Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-legal py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-tight">
                  N M Legal
                </p>
                <p className="text-xs text-gold-light">Associates</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Trusted legal solutions in Mumbai. Professional, transparent and result-driven services.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Clock className="w-4 h-4 text-accent" />
              Mon - Sat: 9:00 AM - 7:00 PM
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919022222966"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-accent" />
                  +91 90222 22966
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@nmlegalassociates.com"
                  className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-accent" />
                  contact@nmlegalassociates.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>
                  Ghatkopar East,<br />
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} N M Legal Associates. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Advocate Navnish Mishra | Bar Council of Maharashtra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
