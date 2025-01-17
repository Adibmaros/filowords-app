import prisma from "@/lib/prisma";

export async function getQuotes(page = 1, limit = 10) {
    try {
        const skip = (page - 1) * limit;
        const quotes = await prisma.quote.findMany({
            skip: skip,
            take: limit,
            select: {
                id: true,
                author: true,
                content: true,
                category: {
                    select: {
                        name: true,
                    }
                }
            }
        });

        const totalQuotes = await prisma.quote.count();
        const totalPages = Math.ceil(totalQuotes / limit);

        return {
            data: quotes,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalData: totalQuotes,
                limit: limit,
            }
        };
    } catch (error) {
        console.error(error);
        return {
            data: [],
            pagination: null,
        };
    }
}
