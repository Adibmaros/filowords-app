import React from 'react';
import {getCategoryById} from "@/app/(admin)/dashboard/categories/lib/data";
import {redirect} from "next/navigation";
import FormQuote from "@/app/(admin)/dashboard/quotes/_components/form-quote";
import {getQuotesById} from "@/app/(admin)/dashboard/quotes/lib/data";
import {getCategories} from "@/app/(admin)/dashboard/categories/lib/data";
const Page = async ({params}) => {

    const {id} = await params
    const categories  = await getCategories()

    const quotesById = await getQuotesById(id);
    if(!quotesById){
        return redirect("/dashboard/quotes")
    }
    console.log(quotesById)
    return <FormQuote
        data={quotesById}
        categories={categories}
        type="EDIT"
    />;
};

export default Page;