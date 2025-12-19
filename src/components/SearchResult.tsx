import { motion } from "framer-motion";
import { Clock, ExternalLink, Quote } from "lucide-react";

interface SearchResultProps {
  videoId: string;
  videoTitle: string;
  thumbnail: string;
  timestamp: string;
  quote: string;
  relevanceScore?: number;
  index: number;
}

export const SearchResult = ({
  videoId,
  videoTitle,
  thumbnail,
  timestamp,
  quote,
  relevanceScore,
  index
}: SearchResultProps) => {
  return (
    <motion.a
      href={`/videos/${videoId}?t=${timestamp}`}
      className="cyber-card p-4 flex gap-4 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 4 }}
    >
      {/* Thumbnail */}
      <div className="relative w-32 md:w-40 flex-shrink-0 aspect-video rounded overflow-hidden">
        <img 
          src={thumbnail} 
          alt={videoTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-background/90 rounded text-xs font-mono text-primary flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {timestamp}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {videoTitle}
          </h3>
          {relevanceScore && (
            <span className="flex-shrink-0 px-2 py-0.5 rounded text-xs font-mono bg-accent/10 text-accent border border-accent/30">
              {Math.round(relevanceScore * 100)}% match
            </span>
          )}
        </div>

        <div className="mt-2 p-3 bg-muted/50 rounded border-l-2 border-primary">
          <Quote className="w-4 h-4 text-primary mb-1" />
          <p className="text-sm text-muted-foreground line-clamp-3 font-mono">
            "{quote}"
          </p>
        </div>

        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="text-primary font-mono">→</span>
          <span className="font-mono">Jump to quote</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </motion.a>
  );
};
