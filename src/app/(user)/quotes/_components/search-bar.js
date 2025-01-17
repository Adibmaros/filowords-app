import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="sticky top-0 bg-white z-50 max-w-md mx-auto mb-8 shadow-md p-2 rounded-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500" />
        <Input
          type="text"
          placeholder="Cari kata-kata bijak..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-10 border-amber-200 bg-white/80 backdrop-blur-sm focus:ring-amber-500 focus:border-amber-500 rounded-xl shadow-sm"
        />
      </div>
    </div>
  );
};

export default SearchBar;
