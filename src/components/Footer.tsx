import { Brain, Github, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Description */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center border border-primary/30">
              <Brain className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              HOSKSAID — A community research tool
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-mono">
            <a 
              href="https://www.youtube.com/@charleshoskinson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              YouTube
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://cardano.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Cardano
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">&gt;</span> Not affiliated with Charles Hoskinson or IOHK. Built with 💜 by the Cardano community.
          </p>
        </div>
      </div>
    </footer>
  );
};
