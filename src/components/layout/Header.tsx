import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/20">
      <div className="container-legal">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold text-primary-foreground leading-tight">
                N M Legal
              </p>
              <p className="text-xs text-gold-light">Associates</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="cta"
              size="sm"
              asChild
              className="gap-2"
            >
              <a href="tel:+919022222966">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-navy-light/20">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-accent text-primary"
                        : "text-primary-foreground/80 hover:bg-navy-light/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 px-4">
                  <Button variant="cta" size="sm" asChild className="w-full gap-2">
                    <a href="tel:+919022222966">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
