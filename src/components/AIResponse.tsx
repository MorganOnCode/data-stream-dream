import { motion } from "framer-motion";
import { Bot, Sparkles, ExternalLink } from "lucide-react";

interface Source {
  videoId: string;
  videoTitle: string;
  timestamp: string;
  quote: string;
}

interface AIResponseProps {
  response: string;
  sources: Source[];
  isLoading?: boolean;
}

export const AIResponse = ({ response, sources, isLoading = false }: AIResponseProps) => {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="cyber-card p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center animate-pulse-glow">
            <Bot className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground">AI Analysis</h3>
            <p className="text-xs text-muted-foreground font-mono">Processing neural pathways...</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse w-full" />
          <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
          <div className="h-4 bg-muted rounded animate-pulse w-4/6" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="cyber-card p-6 relative overflow-hidden"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/20 to-transparent" />
      
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center neon-glow-magenta">
          <Sparkles className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <h3 className="font-display font-bold text-foreground">AI Analysis</h3>
          <p className="text-xs text-muted-foreground font-mono">Synthesized from {sources.length} sources</p>
        </div>
      </div>

      {/* Response */}
      <div className="prose prose-invert prose-sm max-w-none">
        <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
          {response}
        </p>
      </div>

      {/* Sources */}
      {sources.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border">
          <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
            📚 Sources
          </h4>
          <div className="space-y-2">
            {sources.map((source, idx) => (
              <a
                key={idx}
                href={`/videos/${source.videoId}?t=${source.timestamp}`}
                className="flex items-center gap-2 p-2 rounded bg-muted/50 hover:bg-muted text-sm group transition-colors"
              >
                <span className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center text-xs text-primary font-mono">
                  {idx + 1}
                </span>
                <span className="flex-1 truncate text-muted-foreground group-hover:text-foreground">
                  {source.videoTitle}
                </span>
                <span className="text-xs text-primary font-mono">{source.timestamp}</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};
