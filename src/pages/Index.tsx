import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Database, Brain, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CyberSearchBar } from "@/components/CyberSearchBar";
import { VideoCard } from "@/components/VideoCard";
import { GlitchText } from "@/components/GlitchText";

// Mock data - replace with real data from your API
const mockVideos = [
  {
    id: "VZiqLsch6Vs",
    title: "RIP Rob Reiner",
    thumbnail: "https://i.ytimg.com/vi/VZiqLsch6Vs/hqdefault.jpg",
    duration: "3 min",
    date: "Dec 15, 2025",
    views: "3,559",
    tags: ["rob reiner", "all in the family", "the princess bride"]
  },
  {
    id: "3RPJcd7WrRw",
    title: "Some End of Year Thoughts",
    thumbnail: "https://i.ytimg.com/vi/3RPJcd7WrRw/hqdefault.jpg",
    duration: "40 min",
    date: "Dec 15, 2025",
    views: "13,778",
    tags: ["charles hoskinson", "cardano", "midnight"]
  },
  {
    id: "BMdpZXnUUEI",
    title: "Congratulations Iagon",
    thumbnail: "https://i.ytimg.com/vi/BMdpZXnUUEI/hqdefault.jpg",
    duration: "10 min",
    date: "Dec 11, 2025",
    views: "5,619",
    tags: ["charles hoskinson", "cardano", "iagon"]
  },
  {
    id: "M6ovJKI_XIE",
    title: "Pentad Integration Update: Pyth",
    thumbnail: "https://i.ytimg.com/vi/M6ovJKI_XIE/hqdefault.jpg",
    duration: "7 min",
    date: "Dec 11, 2025",
    views: "8,097",
    tags: ["cardano", "defi", "pyth network"]
  },
  {
    id: "CPbHozLwdSU",
    title: "Addiction to Bad Faith; the evil of algorithms",
    thumbnail: "https://i.ytimg.com/vi/CPbHozLwdSU/hqdefault.jpg",
    duration: "40 min",
    date: "Dec 11, 2025",
    views: "8,264",
    tags: ["cardano", "midnight", "project simulacra"]
  },
  {
    id: "fVDeJPeFMN8",
    title: "Midnight Launch AAR",
    thumbnail: "https://i.ytimg.com/vi/fVDeJPeFMN8/hqdefault.jpg",
    duration: "19 min",
    date: "Dec 10, 2025",
    views: "10,106",
    tags: ["midnight", "launch", "cardano"]
  },
];

const stats = [
  { label: "Videos Indexed", value: "100+", icon: Database },
  { label: "Hours of Content", value: "500+", icon: TrendingUp },
  { label: "Searchable Quotes", value: "50K+", icon: Brain },
];

const Index = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string, useAI: boolean) => {
    setIsSearching(true);
    // Navigate to search page with query
    window.location.href = `/search?q=${encodeURIComponent(query)}${useAI ? '&ai=true' : ''}`;
  };

  return (
    <div className="min-h-screen flex flex-col matrix-bg">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          {/* Scanlines */}
          <div className="absolute inset-0 scanlines pointer-events-none" />
          
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Glitch title */}
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-foreground">WHAT DID </span>
                <GlitchText text="CHARLES" className="text-primary neon-text-cyan" />
                <span className="text-foreground"> SAY?</span>
              </h1>

              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-primary">&gt;</span> Search and explore transcripts from Charles Hoskinson's YouTube videos.
                <br />
                <span className="text-secondary">A research tool for the Cardano community.</span>
              </motion.p>

              {/* Search Bar */}
              <CyberSearchBar 
                onSearch={handleSearch}
                placeholder="What did Charles say about..."
                isLoading={isSearching}
              />

              {/* Status indicator */}
              <motion.div 
                className="flex items-center justify-center gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-muted-foreground font-mono">
                  Auto-updating library • Neural search active
                </span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-display font-bold text-2xl md:text-3xl text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Latest Videos Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  Latest Videos
                </h2>
                <p className="text-muted-foreground font-mono text-sm mt-1">
                  Recently transcribed from the matrix
                </p>
              </div>
              <Link 
                to="/videos"
                className="flex items-center gap-2 px-4 py-2 rounded bg-muted hover:bg-muted/80 text-sm font-mono text-muted-foreground hover:text-foreground transition-all group"
              >
                View all
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockVideos.map((video, index) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
          <div className="container mx-auto px-4 relative">
            <motion.div 
              className="cyber-card p-8 md:p-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-muted-foreground font-mono mb-6">
                Try our AI-powered semantic search. Ask questions in natural language
                and get answers synthesized from hours of Charles's videos.
              </p>
              <Link
                to="/search"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-display font-bold rounded hover:opacity-90 transition-opacity neon-glow-magenta"
              >
                Try AI Search
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
