import { motion } from "framer-motion";
import { Clock, Eye, Play } from "lucide-react";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
  views: string;
  tags: string[];
  description?: string;
  variant?: "grid" | "list";
}

export const VideoCard = ({
  id,
  title,
  thumbnail,
  duration,
  date,
  views,
  tags,
  description,
  variant = "grid"
}: VideoCardProps) => {
  if (variant === "list") {
    return (
      <motion.a
        href={`/videos/${id}`}
        className="cyber-card flex gap-4 p-4 hover:scale-[1.01] transition-transform cursor-pointer group"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 4 }}
      >
        {/* Thumbnail */}
        <div className="relative w-40 md:w-52 flex-shrink-0 aspect-video rounded overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/90 rounded text-xs font-mono text-primary">
            {duration}
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center neon-glow-cyan">
              <Play className="w-5 h-5 text-primary-foreground fill-current ml-1" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1 font-mono">
            <span>{date}</span>
            <span className="text-primary">•</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {views}
            </span>
          </div>

          {description && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="cyber-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={`/videos/${id}`}
      className="cyber-card group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/90 rounded text-xs font-mono text-primary border border-primary/30">
          <Clock className="w-3 h-3 inline mr-1" />
          {duration}
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div 
            className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center neon-glow-cyan"
            whileHover={{ scale: 1.1 }}
          >
            <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm md:text-base">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 font-mono">
          <span>{date}</span>
          <span className="text-primary">•</span>
          <span>{views} views</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="cyber-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};
