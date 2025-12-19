import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Grid, List, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";

// Mock data - replace with real data from your API
const mockVideos = [
  {
    id: "VZiqLsch6Vs",
    title: "RIP Rob Reiner",
    thumbnail: "https://i.ytimg.com/vi/VZiqLsch6Vs/hqdefault.jpg",
    duration: "3 min",
    date: "Dec 15, 2025",
    views: "3,559",
    tags: ["rob reiner", "all in the family", "the princess bride"],
    description: "Rob Reiner has passed away, prompting a tribute video."
  },
  {
    id: "3RPJcd7WrRw",
    title: "Some End of Year Thoughts",
    thumbnail: "https://i.ytimg.com/vi/3RPJcd7WrRw/hqdefault.jpg",
    duration: "40 min",
    date: "Dec 15, 2025",
    views: "13,778",
    tags: ["charles hoskinson", "cardano", "midnight", "trumpcoin", "ai bubble"],
    description: "Charles Hoskinson discusses the challenges faced by the crypto industry in 2025 and reflects on the year as a difficult one."
  },
  {
    id: "BMdpZXnUUEI",
    title: "Congratulations Iagon",
    thumbnail: "https://i.ytimg.com/vi/BMdpZXnUUEI/hqdefault.jpg",
    duration: "10 min",
    date: "Dec 11, 2025",
    views: "5,619",
    tags: ["charles hoskinson", "cardano", "iagon", "fireblocks", "cnts"],
    description: "Charles Hoskinson announces a significant integration between IGON and Fireblocks for the Cardano ecosystem."
  },
  {
    id: "M6ovJKI_XIE",
    title: "Pentad Integration Update: Pyth",
    thumbnail: "https://i.ytimg.com/vi/M6ovJKI_XIE/hqdefault.jpg",
    duration: "7 min",
    date: "Dec 11, 2025",
    views: "8,097",
    tags: ["cardano", "decentralized finance", "pyth network", "oracles", "intersect"],
    description: "Charles Hoskinson provided an update on Cardano from Colorado on December 11, 2025."
  },
  {
    id: "CPbHozLwdSU",
    title: "Addiction to Bad Faith; the evil of algorithms",
    thumbnail: "https://i.ytimg.com/vi/CPbHozLwdSU/hqdefault.jpg",
    duration: "40 min",
    date: "Dec 11, 2025",
    views: "8,264",
    tags: ["cardano", "midnight", "project simulacra", "community", "development"],
    description: "Charles Hoskinson discusses the recent launch of an asset on Cardano that reportedly surpassed Algorand in market cap."
  },
  {
    id: "fVDeJPeFMN8",
    title: "Midnight Launch AAR",
    thumbnail: "https://i.ytimg.com/vi/fVDeJPeFMN8/hqdefault.jpg",
    duration: "19 min",
    date: "Dec 10, 2025",
    views: "10,106",
    tags: ["midnight", "launch", "cardano", "after action review"],
    description: "After action review of the Midnight launch and what comes next."
  },
  {
    id: "example1",
    title: "The Future of Smart Contracts",
    thumbnail: "https://i.ytimg.com/vi/3RPJcd7WrRw/hqdefault.jpg",
    duration: "35 min",
    date: "Dec 8, 2025",
    views: "15,234",
    tags: ["smart contracts", "plutus", "cardano"],
    description: "Deep dive into the evolution of smart contract platforms."
  },
  {
    id: "example2",
    title: "Decentralization in 2025",
    thumbnail: "https://i.ytimg.com/vi/BMdpZXnUUEI/hqdefault.jpg",
    duration: "28 min",
    date: "Dec 5, 2025",
    views: "12,567",
    tags: ["decentralization", "governance", "voltaire"],
    description: "How Cardano is achieving true decentralization through community governance."
  },
];

const Videos = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [filterQuery, setFilterQuery] = useState("");

  const filteredVideos = mockVideos.filter(video => 
    video.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    video.tags.some(tag => tag.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col matrix-bg">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
              All Videos
            </h1>
            <p className="text-muted-foreground font-mono">
              <span className="text-primary">{mockVideos.length}</span> transcribed videos available
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Search/Filter */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter by title or tag..."
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-muted rounded p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "grid" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-colors ${
                  viewMode === "list" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Videos Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} {...video} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} {...video} variant="list" />
              ))}
            </div>
          )}

          {filteredVideos.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-mono">No videos match your filter</p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
