import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product6 from "@/assets/product-6.jpg";

const tabs = ["Under ₹2,000", "₹2,000 – ₹5,000", "Premium"];

const products: Record<string, { image: string; name: string; price: string }[]> = {
  "Under ₹2,000": [
    { image: product4, name: "Bakhoor Classic", price: "₹1,299" },
    { image: product6, name: "Musk Lite", price: "₹1,599" },
    { image: product2, name: "Attar Breeze", price: "₹1,899" },
  ],
  "₹2,000 – ₹5,000": [
    { image: product1, name: "Royal Amber", price: "₹3,499" },
    { image: product2, name: "Sultan Attar", price: "₹2,799" },
    { image: product6, name: "Noir Musk", price: "₹4,299" },
  ],
  Premium: [
    { image: product3, name: "Oud Al Malikah", price: "₹8,999" },
    { image: product1, name: "Amber Exclusive", price: "₹6,999" },
    { image: product3, name: "Royal Oud Reserve", price: "₹12,999" },
  ],
};

const ShopByPrice = () => {
  const [active, setActive] = useState("Under ₹2,000");

  return (
    <section className="section-padding">
      <SectionHeading title="Shop by Price" subtitle="Luxury at every price point" />

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
          {products[active].map((p, i) => (
            <ProductCard key={`${p.name}-${i}`} {...p} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ShopByPrice;
