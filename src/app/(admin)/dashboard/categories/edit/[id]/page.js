import React from 'react';
import {getCategoryById} from "@/app/(admin)/dashboard/categories/lib/data";
import FormCategory from "@/app/(admin)/dashboard/categories/_components/form-category";
import {redirect} from "next/navigation";
const Page = async ({params}) => {

    const {id} = await params

    const categoryById = await getCategoryById(id);
    if(!categoryById){
        return redirect("/dashboard/categories")
    }
    console.log(categoryById)
    return <FormCategory
        data={categoryById}
        type="EDIT"
    />;
};

export default Page;