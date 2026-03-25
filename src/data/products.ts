import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import productExtra1 from "@/assets/product-extra-1.png";
import productExtra2 from "@/assets/product-extra-2.png";
import productExtra3 from "@/assets/product-extra-3.png";
import productExtra4 from "@/assets/product-extra-4.png";
import productExtra5 from "@/assets/product-extra-5.png";
import productExtra6 from "@/assets/product-extra-6.png";
import tasbeeh1 from "@/assets/tasbeeh-1.png";
import tasbeeh2 from "@/assets/tasbeeh-2.jpg";
import tasbeeh3 from "@/assets/tasbeeh-3-fixed.jpg";
import tasbeeh4 from "@/assets/tasbeeh-4.png";
import tasbeeh5 from "@/assets/tasbeeh-5.jpg";

export interface Product {
  id: string;
  image: string;
  name: string;
  price: string;
  numericPrice: number;
  gender: "men" | "women" | "unisex";
  category: "perfumes" | "attar" | "oud" | "giftsets" | "prayer mats" | "books";
  subCategory?: string;
  isNew?: boolean;
  bestsellerRank?: number;
  description?: string;
  highlights?: string[];
  specs?: Record<string, string>;
}

export const allProducts: Product[] = [
  { 
    id: "1", 
    image: product1, 
    name: "Noor Al Attar", 
    price: "₹3,499", 
    numericPrice: 3499, 
    gender: "unisex", 
    category: "attar", 
    bestsellerRank: 1,
    description: "A divine blend of white musk and pure Taifi rose, Noor Al Attar embodies the spiritual light and purity of the holy cities. This concentrated oil is designed to last for over 12 hours, leaving a trail of serenity.",
    highlights: ["Concentrated Oil (CPO)", "100% Alcohol-Free", "Long-lasting (12h+)", "Hand-finished bottle"],
    specs: { "Volume": "12ml", "Origin": "Taif, Saudi Arabia", "Base": "White Musk", "Notes": "Rose, Amber, Vanilla" }
  },
  { id: "2", image: product2, name: "Sultan Al Oud", price: "₹2,799", numericPrice: 2799, gender: "men", category: "oud", bestsellerRank: 2 },
  { id: "3", image: product3, name: "Oud Al Malikah", price: "₹5,999", numericPrice: 5999, gender: "women", category: "oud", bestsellerRank: 3 },
  { id: "4", image: product4, name: "Bakhoor Al Dar", price: "₹1,899", numericPrice: 1899, gender: "unisex", category: "giftsets", bestsellerRank: 4 },
  { id: "5", image: product5, name: "Rose Taifi", price: "₹4,299", numericPrice: 4299, gender: "women", category: "attar", bestsellerRank: 5, isNew: true },
  { id: "6", image: product6, name: "Musk Al Madinah", price: "₹2,199", numericPrice: 2199, gender: "unisex", category: "attar", bestsellerRank: 6 },
  { id: "7", image: product1, name: "Gentleman's Oud", price: "₹4,199", numericPrice: 4199, gender: "men", category: "oud", bestsellerRank: 7 },
  { id: "8", image: product2, name: "Desert Rose", price: "₹3,199", numericPrice: 3199, gender: "women", category: "perfumes", bestsellerRank: 8 },
  { id: "9", image: product3, name: "Midnight Musk", price: "₹2,599", numericPrice: 2599, gender: "men", category: "attar", bestsellerRank: 9, isNew: true },
  { id: "10", image: product4, name: "Golden Attar", price: "₹1,599", numericPrice: 1599, gender: "unisex", category: "attar", bestsellerRank: 10 },
  { id: "11", image: product5, name: "Princess Oud", price: "₹5,499", numericPrice: 5499, gender: "women", category: "oud", bestsellerRank: 11 },
  { id: "12", image: product6, name: "Emperor's Choice", price: "₹6,999", numericPrice: 6999, gender: "men", category: "oud", bestsellerRank: 12 },
  { id: "13", image: product1, name: "Noorique", price: "₹4,999", numericPrice: 4999, gender: "unisex", category: "perfumes", isNew: true },
  { id: "14", image: product2, name: "Oudify", price: "₹5,299", numericPrice: 5299, gender: "unisex", category: "oud" },
  { id: "15", image: product3, name: "Jannat Fragrances", price: "₹6,499", numericPrice: 6499, gender: "women", category: "perfumes" },
  { id: "16", image: product4, name: "Barakah Oud", price: "₹7,899", numericPrice: 7899, gender: "unisex", category: "oud" },
  { id: "17", image: product5, name: "Khalifa Fragrance", price: "₹8,999", numericPrice: 8999, gender: "men", category: "perfumes", bestsellerRank: 3 },
  { id: "18", image: product6, name: "Al Rehan Attar", price: "₹2,999", numericPrice: 2999, gender: "unisex", category: "attar" },
  { id: "19", image: product1, name: "Royal Madinah Musk", price: "₹4,599", numericPrice: 4599, gender: "unisex", category: "attar" },
  { id: "20", image: product2, name: "Al Khaas Oud", price: "₹9,999", numericPrice: 9999, gender: "men", category: "oud", isNew: true },
  { id: "21", image: productExtra1, name: "Premium Gift Set", price: "₹12,499", numericPrice: 12499, gender: "unisex", category: "giftsets", bestsellerRank: 0 },
  { id: "22", image: productExtra2, name: "Islamic Car Diffuser", price: "₹3,999", numericPrice: 3999, gender: "unisex", category: "giftsets", isNew: true },
  { id: "23", image: productExtra3, name: "Majestic Scent Tray", price: "₹15,999", numericPrice: 15999, gender: "unisex", category: "giftsets" },
  { id: "24", image: productExtra4, name: "Pearl Oud Box", price: "₹18,999", numericPrice: 18999, gender: "unisex", category: "giftsets" },
  { id: "25", image: productExtra5, name: "Modern Leather Diffuser", price: "₹5,499", numericPrice: 5499, gender: "unisex", category: "giftsets", isNew: true },
  { id: "26", image: productExtra6, name: "Pure Khus Special", price: "₹4,999", numericPrice: 4999, gender: "unisex", category: "attar" },
  { 
    id: "27", 
    image: tasbeeh1, 
    name: "Elite Digital Ring Counter", 
    price: "₹1,499", 
    numericPrice: 1499, 
    gender: "unisex", 
    category: "giftsets", 
    subCategory: "tasbeeh", 
    isNew: true,
    description: "The next generation of spiritual tools. This smart ring Tasbeeh featuring a high-contrast OLED display and vibration alerts for milestones (33, 66, 99, 100). Crafted with premium aviation-grade aluminum.",
    highlights: ["Bluetooth App Sync", "OLED Display", "Vibration Alerts", "3-Day Battery Life"],
    specs: { "Material": "Aviation Aluminum", "Display": "OLED Smart Screen", "Charging": "USB Type-C", "Waterproof": "IP67 Rated" }
  },
  { 
    id: "28", 
    image: tasbeeh2, 
    name: "Royal Wood-Grain Counter", 
    price: "₹899", 
    numericPrice: 899, 
    gender: "unisex", 
    category: "giftsets", 
    subCategory: "tasbeeh",
    description: "Elegance meets technology. A digital tally counter finished in a rich, warm wood-grain texture. Features a silent-press mechanism for discreet use in masjid or gatherings.",
    highlights: ["Silent-Click Technology", "Eco-friendly Wood Finish", "Ergonomic Design", "Large LCD Screen"],
    specs: { "Material": "ABS with Wood-Grain Coating", "Battery": "CR2032 (Replaceable)", "Max Count": "99,999", "Weight": "25g" }
  },
  { 
    id: "29", 
    image: tasbeeh3, 
    name: "Crystal Luxe Tasbeeh Set", 
    price: "₹1,999", 
    numericPrice: 1999, 
    gender: "unisex", 
    category: "giftsets", 
    subCategory: "tasbeeh", 
    isNew: true,
    description: "A complete spiritual gifting set. Each set includes a crystal-encrusted digital counter paired with a matching 33-bead pearl Tasbeeh, presented in a luxury floating display box.",
    highlights: ["Complete Gifting Set", "Floating Display Box", "Handcrafted Beads", "SWAROVSKI-style Crystals"],
    specs: { "Set Includes": "Digital Counter + 33-Bead Tasbeeh", "Box Type": "Floating Silicone Display", "Material": "Synthetic Pearl & Crystal", "Colors": "Available in Red, White, Blue, Pink" }
  },
  { 
    id: "30", 
    image: tasbeeh4, 
    name: "Diamond Sparkle Counter", 
    price: "₹1,299", 
    numericPrice: 1299, 
    gender: "unisex", 
    category: "giftsets", 
    subCategory: "tasbeeh",
    description: "Shine in your shop with this brilliant, diamond-encrusted tally counter. Perfect for special occasions or as a high-value gift for loved ones.",
    highlights: ["Premium Crystal Inlay", "Adjustable Silicone Strap", "Energy Saving Mode", "Gift-ready Packaging"],
    specs: { "Bead Count": "Digital", "Crystal Type": "Premium Grade AAA", "Strap": "Medical-Grade Silicone", "Reset": "Manual Lock Button" }
  },
  { 
    id: "31", 
    image: tasbeeh5, 
    name: "Heritage Wooden Beads", 
    price: "₹799", 
    numericPrice: 799, 
    gender: "unisex", 
    category: "giftsets", 
    subCategory: "tasbeeh",
    description: "Traditional 99-bead Tasbeeh handcrafted from individual wood varieties. Each bead carries the natural aroma and grain of its source tree, offering a grounding tactile experience.",
    highlights: ["99 Handmade Beads", "Natural Wood Aroma", "Reinforced Silk Thread", "Traditional Hand-tie Imam Bead"],
    specs: { "Wood Types": "Sandalwood, Ebony, Rosewood Mix", "Length": "14 inches", "Diameter": "8mm Beads", "Origin": "Artisan Crafted" }
  },
];
