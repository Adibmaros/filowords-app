import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
    return (
        <div className="h-screen flex justify-center items-center gap-3">
            <div>
                <Button asChild variant="outline">
                    <Link href="/dashboard/categories">Categories</Link>
                </Button>
            </div>
            <div>
                <Button asChild>
                    <Link href="/dashboard/quotes">Quotes</Link>
                </Button>
            </div>
        </div>
    );
};

export default Page;