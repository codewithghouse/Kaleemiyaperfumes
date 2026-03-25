import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 overflow-hidden bg-background relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading title="Contact Us" subtitle="Visit our physical boutique or reach out for inquiries." />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Details & Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border/40 p-10 rounded-sm shadow-xl space-y-10 order-2 lg:order-1"
          >
            <div>
              <h3 className="font-serif text-3xl mb-4 text-foreground tracking-wide">Get in Touch</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-lg mb-8">
                Whether you have questions about our collection or seek a personalized fragrance consultation, our artisans are here to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-foreground mb-1">Our Boutique</h4>
                    <address className="not-italic text-muted-foreground font-sans text-xs leading-relaxed">
                      Govt Hospital, 11-2-828, Niyaz Heights,<br />
                      Mallepally Road, Jamia Masjid Rd, Hyderabad, 500001
                    </address>
                  </div>
                </div>
                
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-foreground mb-1">Call Us</h4>
                    <a href="tel:+919876543210" className="text-muted-foreground font-sans text-xs hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border/40">
              <h4 className="font-serif text-lg text-foreground mb-6">Send an Inquiry</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="bg-muted/30 border border-border/50 rounded-sm px-4 py-2.5 text-xs focus:outline-none focus:border-primary/50" />
                  <input type="email" placeholder="Email" className="bg-muted/30 border border-border/50 rounded-sm px-4 py-2.5 text-xs focus:outline-none focus:border-primary/50" />
                </div>
                <textarea placeholder="How can we help?" rows={3} className="w-full bg-muted/30 border border-border/50 rounded-sm px-4 py-2.5 text-xs focus:outline-none focus:border-primary/50" />
                <Button variant="gold" className="w-full md:w-auto px-10 text-[10px] tracking-[0.2em] uppercase rounded-sm h-10">
                  Submit Inquiry
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] lg:h-full rounded-sm overflow-hidden border border-primary/20 shadow-2xl order-1 lg:order-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1521453284564!2d78.461876451123!3d17.378943657529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3612f000001%3A0xb3e64c1b0126781!2sGovt%20Hospital%2C%2011-2-828%2C%20Niyaz%20Heights%20Mallepally%20Rd%2C%20Jamia%20Masjid%20Rd%2C%20near%20Nampally%2C%20Nampally%2C%20Mallepally%2C%20Hyderabad%2C%20Telangana%20500001!5e0!3m2!1sen!2sin!4v1678893600000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(0.6) invert(0.9) contrast(1.2)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kaleemiya Perfumes Location"
            ></iframe>
            <div className="absolute top-4 left-4">
              <a 
                href="https://goo.gl/maps/8X6Z1Z1Z1Z1Z1Z1Z1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background/90 backdrop-blur-sm border border-primary/20 px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2"
              >
                Open in Maps <Send className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
