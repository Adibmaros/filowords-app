import React from 'react';
import {getQuotes} from "@/app/(admin)/dashboard/quotes/lib/data";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CardQuotes from "@/app/(user)/quotes/_components/card-quotes";

const Page = async () => {

    const quotes = await getQuotes()

    return (
        <div>
            <CardQuotes quotes={quotes} />
        </div>
    );
};

export default Page;