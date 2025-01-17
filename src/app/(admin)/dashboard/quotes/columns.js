"use client"

import {Button} from "@/components/ui/button";
import Link from "next/link";
import FormDelete from "@/app/(admin)/dashboard/quotes/_components/delete-form";

export const columns = [
    {
        accessorKey : "quote",
        header : "Daftar Quotes",
        cell: ({ row }) => {
            const quote = row.original;
            return (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="w-full">
                        <tbody>
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                            <td className="p-1 text-right font-medium text-gray-600 ">Content:</td>
                            <td className="p-3  text-gray-900 font-semibold">{quote?.content}</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                            <td className="p-1 text-right font-medium text-gray-600">Author:</td>
                            <td className="p-3 text-gray-900">{quote?.author}</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 transition-colors">
                            <td className="p-1 text-right font-medium text-gray-600">kategori:</td>
                            <td className="p-3 text-gray-900">{quote?.category.name}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    },
    {
        id: "actions",
        cell: ({row}) => {
            const data = row.original;
            return (
                <div className="flex md:flex-row flex-col space-y-2  justify-center items-center  ">
                    <Button variant="outline"
                            className="hover:bg-blue-50 hover:border-blue-300 transition-colors" asChild>
                        <Link href={`/dashboard/quotes/edit/${data?.id}`}>Edit</Link>
                    </Button>
                    <FormDelete id={data.id} />
                </div>
            )
        }
    }
]
