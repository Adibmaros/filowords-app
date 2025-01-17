import React from 'react';
import { getQuotes } from "@/app/(admin)/dashboard/quotes/lib/data";
import DataTable from "@/components/data-table";
import { columns } from "@/app/(admin)/dashboard/quotes/columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SearchBar from "@/app/(admin)/dashboard/quotes/_components/search-bar";

const Page = async ({ searchParams }) => {
    const keyword = searchParams?.search || ''; // Ambil keyword dari query params
    const quotes = await getQuotes(keyword); // Ambil data berdasarkan keyword

    return (
        <div className="px-4 mt-10">
            <div>
                <h1 className="text-center text-2xl font-semibold mb-4">Daftar Seluruh Quotes</h1>
            </div>
            <SearchBar />
            <div className="mb-4">
                <Button asChild>
                    <Link href="/dashboard/quotes/tambah">Tambah</Link>
                </Button>
            </div>
            <DataTable columns={columns} data={quotes} />
        </div>
    );
};

export default Page;
