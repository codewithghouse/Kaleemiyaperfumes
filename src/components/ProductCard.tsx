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
      className="group flex-shrink-0 w-[280px] md:w-[300px] cursor-pointer"
      whileHover={{ y: -4 }}
      onClick={() => navigate(`/product/${id}`)}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative overflow-hidden rounded-sm bg-muted/30 mb-5">
        {isNew && (
          <span className="absolute top-4 left-4 z-10 gold-gradient-bg text-primary-foreground text-[10px] font-sans font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-sm">
            New
          </span>
        )}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <Button variant="gold" className="w-full text-xs tracking-[0.15em] uppercase rounded-sm">
            Add to Cart
          </Button>
        </div>
      </div>
      <h3 className="font-serif text-lg text-foreground/90 mb-1">{name}</h3>
      <p className="text-primary font-sans text-sm tracking-wide">{price}</p>
    </motion.div>
  );
};

export default ProductCard;
