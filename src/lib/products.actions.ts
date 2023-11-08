'use server'

import { db } from "./prisma"

export const fetchProductById = async (id: string) => {
    try {

        const product = await db.products.findUnique({ where: { id: id } })
        const productAuthor = await db.users.findUnique({ where: { id: product?.usersId } })
        return { product, productAuthor }
    } catch (error: any) {
        throw new Error(`Error fetching product ${error?.message}`)
    }
}