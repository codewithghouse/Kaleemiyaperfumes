import { motion } from "framer-motion";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#310101]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-150" />
        
        <img 
          src="/logo.png" 
          alt="Kaleemiya Logo" 
          className="h-32 md:h-48 w-auto object-contain relative z-10"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 text-center relative z-10"
      >
        <h1 className="font-serif text-3xl md:text-5xl text-primary tracking-[0.5em] uppercase font-light">
          Kaleemiya
        </h1>
        <div className="mt-4 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                delay: i * 0.2 
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          ))}
        </div>
      </motion.div>

      {/* Finishing line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
        className="mt-10 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
    </motion.div>
  );
};

export default SplashScreen;
