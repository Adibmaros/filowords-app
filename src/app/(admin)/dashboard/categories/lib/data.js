import prisma from "@/lib/prisma";

export async function getCategories(){
    try {
        const categories = await prisma.category.findMany({})
        return categories
    }
    catch (err){
        console.error("error fetching categories: ", err)
        return []
    }
}

export async function getCategoryById(id){
    try {
        const category = await prisma.category.findUnique({
            where : {
                id : parseInt(id)
            }
        })
        return category
    }
    catch (err){
        console.error("error fetching category by id: ", err)
        return null
    }
}