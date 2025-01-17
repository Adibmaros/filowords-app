"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SearchBar from "./search-bar";
import QuoteCard from "./quote-card";

const CardQuotes = ({ quotes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuotes = quotes?.filter((quote) => {
    const quotes_content = quote?.content;
    const quotes_author = quote?.author;

    return quotes_content?.toLowerCase().includes(searchQuery.toLowerCase()) || quotes_author?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="px-6 py-8 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredQuotes.length > 0 ? (
            filteredQuotes.map((quote, index) => (
              <motion.div key={quote.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.02 }}>
                <QuoteCard quote={quote} />
              </motion.div>
            ))
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center text-amber-800 text-lg">
              Tidak ada kata-kata bijak yang sesuai dengan pencarian Anda.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardQuotes;
