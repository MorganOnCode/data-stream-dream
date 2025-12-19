import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Sparkles, Search as SearchIcon, Clock, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CyberSearchBar } from "@/components/CyberSearchBar";
import { SearchResult } from "@/components/SearchResult";
import { AIResponse } from "@/components/AIResponse";

// Mock search results
const mockResults = [
  {
    videoId: "3RPJcd7WrRw",
    videoTitle: "Some End of Year Thoughts",
    thumbnail: "https://i.ytimg.com/vi/3RPJcd7WrRw/hqdefault.jpg",
    timestamp: "12:34",
    quote: "The thing about decentralization is that it's not just about technology, it's about creating systems that are resistant to corruption and censorship...",
    relevanceScore: 0.95
  },
  {
    videoId: "CPbHozLwdSU",
    videoTitle: "Addiction to Bad Faith; the evil of algorithms",
    thumbnail: "https://i.ytimg.com/vi/CPbHozLwdSU/hqdefault.jpg",
    timestamp: "8:22",
    quote: "When we talk about governance, we're really talking about how communities make decisions together, and that's fundamentally what Cardano is trying to solve...",
    relevanceScore: 0.89
  },
  {
    videoId: "fVDeJPeFMN8",
    videoTitle: "Midnight Launch AAR",
    thumbnail: "https://i.ytimg.com/vi/fVDeJPeFMN8/hqdefault.jpg",
    timestamp: "15:47",
    quote: "Midnight represents a new paradigm in how we think about privacy and transparency. You can have both if you design the system correctly...",
    relevanceScore: 0.82
  },
];

const mockAIResponse = {
  response: `Based on Charles's videos, here's what he's said about Midnight:

**Midnight is a privacy-focused blockchain** that Charles describes as "a new paradigm in how we think about privacy and transparency." He emphasizes that it's designed to allow users to have both privacy AND regulatory compliance simultaneously.

Key points from his discussions:
• Midnight uses zero-knowledge proofs to enable selective disclosure
• It's built as a "partner chain" to Cardano, sharing security but having its own token
• Charles sees it as solving the "false dichotomy" between privacy and transparency
• The launch in December 2025 was considered a major milestone for the ecosystem

He often contrasts Midnight with other privacy solutions, noting that it's designed to work within regulatory frameworks rather than against them.`,
  sources: [
    { videoId: "fVDeJPeFMN8", videoTitle: "Midnight Launch AAR", timestamp: "15:47", quote: "Midnight represents a new paradigm..." },
    { videoId: "3RPJcd7WrRw", videoTitle: "Some End of Year Thoughts", timestamp: "22:15", quote: "The privacy features in Midnight..." },
    { videoId: "CPbHozLwdSU", videoTitle: "Addiction to Bad Faith", timestamp: "31:02", quote: "When we built Midnight, we specifically designed..." },
  ]
};

const recentSearches = [
  "What is Midnight?",
  "Cardano governance",
  "Project Simulacra",
  "Bitcoin ETF thoughts",
  "Hydra scaling"
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [useAI, setUseAI] = useState(searchParams.get("ai") === "true");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);

  useEffect(() => {
    const q = searchParams.get("q");
    const ai = searchParams.get("ai") === "true";
    if (q) {
      setQuery(q);
      setUseAI(ai);
      performSearch(q, ai);
    }
  }, []);

  const performSearch = async (searchQuery: string, withAI: boolean) => {
    setIsLoading(true);
    setHasSearched(true);
    setShowAIResponse(withAI);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
  };

  const handleSearch = (searchQuery: string, withAI: boolean) => {
    setQuery(searchQuery);
    setUseAI(withAI);
    performSearch(searchQuery, withAI);
    
    // Update URL
    const params = new URLSearchParams();
    params.set("q", searchQuery);
    if (withAI) params.set("ai", "true");
    window.history.replaceState({}, "", `/search?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col matrix-bg">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
              Search Transcripts
            </h1>
            <p className="text-muted-foreground font-mono">
              Find specific topics, quotes, or ideas from Charles's videos
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <CyberSearchBar 
              onSearch={handleSearch}
              placeholder="Search for topics, quotes, or ideas..."
              isLoading={isLoading}
            />
          </div>

          {/* Results */}
          {hasSearched ? (
            <motion.div 
              className="max-w-4xl mx-auto space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* AI Response */}
              {showAIResponse && (
                <AIResponse 
                  response={mockAIResponse.response}
                  sources={mockAIResponse.sources}
                  isLoading={isLoading}
                />
              )}

              {/* Search Results */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <SearchIcon className="w-4 h-4 text-primary" />
                  <h2 className="font-display font-bold text-lg text-foreground">
                    {isLoading ? "Searching..." : `${mockResults.length} results for "${query}"`}
                  </h2>
                </div>

                {isLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="cyber-card p-4 animate-pulse">
                        <div className="flex gap-4">
                          <div className="w-40 aspect-video bg-muted rounded" />
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-muted rounded w-3/4" />
                            <div className="h-20 bg-muted rounded" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mockResults.map((result, index) => (
                      <SearchResult key={index} {...result} index={index} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            /* Empty state with suggestions */
            <motion.div 
              className="max-w-2xl mx-auto text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <SearchIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
              <h2 className="font-display font-bold text-xl text-muted-foreground mb-4">
                Search the transcript library
              </h2>
              <p className="text-muted-foreground font-mono text-sm mb-8">
                Find specific topics, quotes, or ideas from Charles Hoskinson's videos
              </p>

              {/* Recent searches */}
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
                  <Clock className="w-3 h-3 inline mr-1" />
                  Popular searches
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => handleSearch(search, false)}
                      className="px-4 py-2 bg-muted hover:bg-muted/80 rounded border border-border text-sm font-mono text-muted-foreground hover:text-foreground transition-all"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Suggestion */}
              <div className="mt-12 p-6 cyber-card">
                <Sparkles className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-display font-bold text-foreground mb-2">
                  Try AI-Powered Search
                </h3>
                <p className="text-muted-foreground text-sm font-mono mb-4">
                  Toggle the AI button and ask questions in natural language:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => handleSearch("What does Charles think about Bitcoin?", true)}
                    className="px-3 py-1.5 bg-secondary/10 hover:bg-secondary/20 rounded border border-secondary/30 text-xs font-mono text-secondary transition-all"
                  >
                    "What does Charles think about Bitcoin?"
                  </button>
                  <button
                    onClick={() => handleSearch("Explain Midnight in simple terms", true)}
                    className="px-3 py-1.5 bg-secondary/10 hover:bg-secondary/20 rounded border border-secondary/30 text-xs font-mono text-secondary transition-all"
                  >
                    "Explain Midnight in simple terms"
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;
