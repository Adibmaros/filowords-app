"use server"

import {redirect} from "next/navigation";
import {quoteSchema} from "@/lib/schema";

export async function deleteQuote(_, formData, id){
    try {
        await prisma.quote.delete({
            where : {
                id : parseInt(id)
            }
        })
    }
    catch (err) {
        console.log("gagal menghapus quotes by id", err)
        return {
            message : "Gagal menghapus quotes"
        }
    }
    return redirect("/dashboard/quotes")
}

export async function tambahQuote(_,formData){

    const validate = quoteSchema.safeParse({
        content : formData.get("content"),
        author : formData.get("author"),
        category_id : Number.parseInt(formData.get("category_id"))
    })
    console.log(validate)
    if (!validate.success) {
        return {
            message: validate.error.errors[0].message
        };
    }
    try {
        await prisma.quote.create({
            data : {
                content : validate.data.content,
                author : validate.data.author,
                category_id : validate.data.category_id
            }
        })
    }
    catch (err) {
        console.log("gagal menyimpan quote", err)
        return {
            message : "Gagal menyimpan quote"
        }
    }
    return redirect("/dashboard/quotes")
}

export async function editQuoteById(_,formData, id){

    const validate = quoteSchema.safeParse({
        content : formData.get("content"),
        author : formData.get("author"),
        category_id : Number.parseInt(formData.get("category_id"))
    })

    if(!validate.success){
        return {
            message : validate.error.errors[0].message
        }
    }

    try {
        await prisma.quote.update({
            where : {
                id : parseInt(id)
            },
            data : {
                content : validate.data.content,
                author : validate.data.author,
                category_id : validate.data.category_id
            }
        })
    } catch(err) {
        // console.log(err);
        return {
            message : "Failed to update quote"
        }
    }

    return redirect("/dashboard/quotes")
}