"use server"

import {redirect} from "next/navigation";
import {categorySchema} from "@/lib/schema";

export async function deleteCategory(_, formData, id){
    try {
        await prisma.category.delete({
            where : {
                id : parseInt(id)
            }
        })
    }
    catch (err) {
        console.log("gagal menghapus kategori by id", err)
        return {
            message : "Gagal menghapus kategori"
        }
    }
    return redirect("/dashboard/categories")
}

export async function tambahCategory(_,formData){

    const validate = categorySchema.safeParse({
        name : formData.get("name"),
        description : formData.get("description")
    })
    if (!validate.success) {
        return {
            message: validate.error.errors[0].message
        };
    }
    try {
        await prisma.category.create({
            data : {
                name : validate.data.name,
                description : validate.data.description
            }
        })
    }
    catch (err) {
        console.log("gagal menyimpan kategori", err)
        return {
            message : "Gagal menyimpan kategori"
        }
    }
    return redirect("/dashboard/categories")
}

export async function editCategoryById(_,formData, id){

    const validate = categorySchema.safeParse({
        name : formData.get("name"),
        description : formData.get("description")
    })

    if(!validate.success){
        return {
            message : validate.error.errors[0].message
        }
    }

    try {
        await prisma.category.update({
            where : {
                id : id
            },
            data : {
                name : validate.data.name,
                description : validate.data.description
            }
        })
    } catch(err) {
        // console.log(err);
        return {
            message : "Failed to update category"
        }
    }

    return redirect("/dashboard/categories")
}