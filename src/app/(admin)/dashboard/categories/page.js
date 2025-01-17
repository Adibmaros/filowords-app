import React from 'react';
import {getCategories} from "@/app/(admin)/dashboard/categories/lib/data";
import {columns} from "@/app/(admin)/dashboard/categories/columns";
import DataTable from "@/components/data-table";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {

    const categories = await getCategories();

    return (
        <div className="px-4 mt-10" >
            <div>
                <h1 className="text-2xl text-center font-semibold mb-2" >Daftar Semua Kategori</h1>
            </div>
            <div className="mb-2" >
                <Button asChild >
                    <Link href="/dashboard/categories/tambah">Tambah</Link>
                </Button>
            </div>
            <DataTable columns={columns} data={categories} />
        </div>
    );
};

export default Page;