import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Command } from "lucide-react";

interface CyberSearchBarProps {
  onSearch: (query: string, useAI: boolean) => void;
  placeholder?: string;
  isLoading?: boolean;
}

export const CyberSearchBar = ({ 
  onSearch, 
  placeholder = "Search the neural archives...",
  isLoading = false 
}: CyberSearchBarProps) => {
  const [query, setQuery] = useState("");
  const [useAI, setUseAI] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, useAI);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="relative group">
        {/* Glow effect container */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500 group-focus-within:opacity-75" />
        
        <div className="relative flex items-center bg-card border border-border rounded-lg overflow-hidden">
          <div className="flex items-center pl-4 pr-2 text-muted-foreground">
            <Search className="w-5 h-5" />
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent py-4 px-2 text-foreground placeholder:text-muted-foreground focus:outline-none font-mono text-sm md:text-base"
          />

          {/* AI Toggle */}
          <button
            type="button"
            onClick={() => setUseAI(!useAI)}
            className={`flex items-center gap-1.5 px-3 py-1.5 mx-2 rounded text-xs font-medium transition-all ${
              useAI 
                ? "bg-secondary/20 text-secondary border border-secondary/50 neon-glow-magenta" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">AI</span>
          </button>

          {/* Search Button */}
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="flex items-center gap-2 px-4 md:px-6 py-4 bg-primary text-primary-foreground font-display font-bold text-sm hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <motion.div
                className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <span className="hidden sm:inline">SEARCH</span>
                <Command className="w-4 h-4 sm:hidden" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* AI Mode indicator */}
      {useAI && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-center text-xs text-secondary mt-2 font-mono"
        >
          ✨ AI Mode: Ask questions like "What did Charles say about Midnight?"
        </motion.p>
      )}
    </motion.form>
  );
};
