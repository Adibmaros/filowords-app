"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [keyword, setKeyword] = useState(searchParams.get("search") || "");

    // Fungsi untuk menangani pencarian
    const handleSearch = () => {
        const trimmedKeyword = keyword.trim();
        if (trimmedKeyword) {
            router.push(`/dashboard/quotes?search=${encodeURIComponent(trimmedKeyword)}`);
        } else {
            router.push(`/dashboard/quotes`); // Reset pencarian jika input kosong
        }
    };

    // Fungsi untuk menangani Enter key
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    // Perbarui URL jika keyword berubah (debounced)
    useEffect(() => {
        const timer = setTimeout(() => {
            const trimmedKeyword = keyword.trim();
            if (trimmedKeyword) {
                router.push(`/dashboard/quotes?search=${encodeURIComponent(trimmedKeyword)}`);
            } else {
                router.push(`/dashboard/quotes`);
            }
        }, 2000); // Delay untuk debounce

        return () => clearTimeout(timer);
    }, [keyword, router]);

    return (
        <div className="flex gap-2 mb-4">
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Masukkan kata kunci"
                className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Cari
            </button>
        </div>
    );
};

export default SearchBar;
