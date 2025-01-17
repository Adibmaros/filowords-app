import React from 'react';
import FormQuote from "@/app/(admin)/dashboard/quotes/_components/form-quote";
import {getCategories} from "@/app/(admin)/dashboard/categories/lib/data";
const Page =  async () => {

    const categories = await getCategories()
    return (
        <div>
            <FormQuote categories={categories}/>
        </div>
    );
};

export default Page;