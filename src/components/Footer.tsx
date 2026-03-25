import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Shop: [
    { name: "Perfumes", href: "/shop" },
    { name: "Attar", href: "/attar" },
    { name: "Oud", href: "/oud" },
    { name: "Bakhoor", href: "/gift-sets" },
    { name: "Gift Sets", href: "/gift-sets" },
  ],
  Support: [
    { name: "Track Order", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  Policies: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
  Contact: [
    { name: "support@kaleemiya.com", href: "mailto:support@kaleemiya.com" },
    { name: "+91 98765 43210", href: "tel:+919876543210" },
    { name: "Hyderabad, Telangana 500001", href: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/30" style={{ background: "linear-gradient(180deg, hsl(0, 50%, 6%) 0%, hsl(0, 0%, 3.1%) 100%)" }}>
      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-20 text-center border-b border-border/20"
      >
        <h3 className="font-serif text-2xl md:text-3xl mb-3">Join the Kaleemiya World</h3>
        <p className="text-muted-foreground font-sans text-sm mb-8 max-w-md mx-auto">
          Exclusive launches, artisan stories, and offers — delivered with care.
        </p>
        <div className="flex max-w-md mx-auto gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-muted/30 border border-border/50 rounded-sm px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
          <Button variant="gold" className="px-6 text-xs tracking-[0.15em] uppercase rounded-sm">
            Subscribe
          </Button>
        </div>
      </motion.div>

      {/* Links */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-serif text-lg text-foreground mb-5">{title}</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground font-sans text-sm hover:text-primary transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img 
            src="/logo.jpg" 
            alt="Kaleemiya Logo" 
            className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <p className="text-muted-foreground/60 text-xs font-sans">
            © 2026 Kaleemiya Perfumes. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground/50 hover:text-primary transition-colors duration-300" aria-label="Social link">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
