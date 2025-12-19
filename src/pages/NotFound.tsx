import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center matrix-bg grid-pattern">
      <div className="absolute inset-0 scanlines pointer-events-none" />
      
      <motion.div 
        className="text-center px-4 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-20 h-20 mx-auto mb-6 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center justify-center"
        >
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </motion.div>

        <h1 className="font-display text-6xl md:text-8xl font-black mb-4">
          <GlitchText text="404" className="text-primary neon-text-cyan" />
        </h1>
        
        <p className="text-xl text-muted-foreground font-mono mb-2">
          <span className="text-primary">&gt;</span> NEURAL_LINK_FAILED
        </p>
        <p className="text-muted-foreground font-mono mb-8">
          The requested node does not exist in the matrix
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold rounded hover:opacity-90 transition-opacity neon-glow-cyan"
        >
          <Home className="w-4 h-4" />
          Return to Main Grid
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
