import prisma from "@/lib/prisma";
import {getCategories} from "@/app/(admin)/dashboard/categories/lib/data";


export async function getQuotes(keyword = '') {
    try {
        const quotes = await prisma.quote.findMany({
            where: {
                OR: [
                    { author: { contains: keyword, mode: 'insensitive' } },
                    { content: { contains: keyword, mode: 'insensitive' } },
                    { category: { name: { contains: keyword, mode: 'insensitive' } } },
                ],
            },
            select: {
                id: true,
                author: true,
                content: true,
                category: {
                    select: { name: true },
                },
            },
        });
        return quotes;
    } catch (error) {
        console.error(error);
        return [];
    }
}


export async function getQuotesById(id){
    try {
        const quote = await prisma.quote.findUnique({
            where : {
                id : Number(id)
            },
            select : {
                id : true,
                author : true,
                content : true,
                category : {
                    select : {
                        name : true,
                        id : true
                    }
                }
            }
        })
        return quote;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

