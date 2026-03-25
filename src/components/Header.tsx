import { useState, useEffect } from "react";
import { Search, Heart, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MegaMenu from "./MegaMenu";
import VoiceSearch from "./VoiceSearch";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Attar", href: "/attar" },
  { name: "Gift Sets", href: "/gift-sets" },
  { name: "Prayer Mats", href: "/prayer-mats" },
  { name: "Books", href: "/books" },
  { name: "Contact", href: "/contact" }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="Kaleemiya Perfumes Logo" 
            className="h-10 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Search Bar - Full screen overlay when open */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/98 backdrop-blur-xl flex items-center justify-center px-6 z-[60]"
            >
              <div className="w-full max-w-2xl relative z-[70]">
                <div className="relative">
                  <input 
                    autoFocus
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
                      }
                      if (e.key === 'Escape') setSearchOpen(false);
                    }}
                    placeholder="Search our collection..."
                    className="w-full bg-transparent border-b-2 border-primary/30 py-6 px-16 text-2xl md:text-3xl font-serif focus:outline-none focus:border-primary transition-all text-foreground placeholder:text-muted-foreground/40"
                  />
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/60" />
                  <button 
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-muted/50 rounded-full transition-colors group"
                  >
                    <X className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                </div>
                
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.25em] order-2 md:order-1 opacity-70">
                    Press Enter to search or Escape to close
                  </p>
                  <div className="flex items-center gap-4 order-1 md:order-2 bg-primary/10 py-2.5 px-6 rounded-full border border-primary/20 backdrop-blur-sm shadow-xl">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary/90">Experience Voice Search:</span>
                    <VoiceSearch />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Nav */}
        <nav 
          className="hidden lg:flex items-center gap-10"
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/90 text-[10px] font-sans tracking-[0.25em] uppercase hover:text-accent transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-500 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onMouseEnter={() => setMegaMenuOpen(true)}
            className={`text-sm font-sans tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-2 ${megaMenuOpen ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
          >
            All Collections
          </button>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <button 
            className={`transition-colors duration-300 ${searchOpen ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`} 
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <div className="hidden sm:block">
            <VoiceSearch />
          </div>
          <a 
            href="/shop"
            className="text-foreground/70 hover:text-primary transition-colors duration-300 relative" 
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-[10px] flex items-center justify-center text-primary-foreground font-semibold">
              0
            </span>
          </a>
          <button
            className="lg:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <MegaMenu 
        isOpen={megaMenuOpen} 
        onMouseEnter={() => setMegaMenuOpen(true)}
        onMouseLeave={() => setMegaMenuOpen(false)}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/30 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="text-foreground/80 text-sm font-sans tracking-[0.2em] uppercase hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
