import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  isNew?: boolean;
}

const ProductCard = ({ id, image, name, price, isNew }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="group flex-shrink-0 w-[280px] md:w-[300px] cursor-pointer bg-card border border-primary/10 hover:border-primary/30 active:scale-[0.99] transition-all duration-500 overflow-hidden"
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="relative overflow-hidden bg-muted/10">
        {isNew && (
          <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-[9px] font-sans font-bold tracking-[0.25em] uppercase px-3 py-1.5 shadow-xl">
            New
          </span>
        )}
        <div className="aspect-[3/4] overflow-hidden grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
          <Button variant="gold" className="w-full rounded-none">
            Discover More
          </Button>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif text-lg text-primary mb-2 group-hover:text-accent transition-colors tracking-wide">{name}</h3>
        <p className="text-foreground/60 font-sans text-xs tracking-[0.2em] uppercase">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
