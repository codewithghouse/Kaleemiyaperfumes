import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const tabs = ["Daily Wear", "Spiritual", "Office", "Hajj & Umrah", "Special Giftings"];

const products: Record<string, { image: string; name: string; price: string }[]> = {
  "Daily Wear": [
    { image: product1, name: "Royal Amber", price: "₹2,499" },
    { image: product6, name: "Fresh Musk", price: "₹1,899" },
    { image: product2, name: "White Oud Light", price: "₹2,799" },
  ],
  "Spiritual": [
    { image: product5, name: "Noor Al Madinah", price: "₹4,999" },
    { image: product3, name: "Musk Al Tahara", price: "₹6,299" },
    { image: product1, name: "Sakinah Blend", price: "₹3,799" },
  ],
  Office: [
    { image: product6, name: "Clean Musk", price: "₹2,199" },
    { image: product2, name: "Subtle Attar", price: "₹1,999" },
    { image: product1, name: "Light Amber", price: "₹2,299" },
  ],
  "Hajj & Umrah": [
    { image: product1, name: "Barakah Oud", price: "₹5,499" },
    { image: product3, name: "Arafa Scent", price: "₹6,899" },
    { image: product5, name: "Imaan Fragrance", price: "₹4,599" },
  ],
  "Special Giftings": [
    { image: product3, name: "Oud Mehar Luxury", price: "₹12,999" },
    { image: product5, name: "Bridal Rose Gold", price: "₹7,499" },
    { image: product2, name: "Sultan Royal Set", price: "₹15,999" },
  ],
};

const ShopByOccasion = () => {
  const [active, setActive] = useState("Daily Wear");

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0, 78%, 8%) 0%, hsl(0, 0%, 3.1%) 100%)" }}>
      <SectionHeading title="Shop by Occasion" subtitle="Find the perfect fragrance for every moment" />

      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2.5 rounded-sm text-sm font-sans tracking-[0.1em] uppercase transition-all duration-300 ${
              active === tab
                ? "gold-gradient-bg text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-8 justify-center flex-wrap"
        >
          {products[active].map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 text-center">
        <a 
          href="/shop" 
          className="text-primary font-sans font-bold uppercase tracking-[0.2em] text-xs border-b border-primary/30 pb-1 hover:border-primary transition-colors"
        >
          View All Collections
        </a>
      </div>
    </section>
  );
};

export default ShopByOccasion;
