'use server'

import { revalidatePath } from "next/cache"
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

export const DeleteProduct = async (id: string, path: string) => {
    try {
        const productToDelete = await db.products.delete({ where: { id: id } })
        revalidatePath(path)
    } catch (error: any) {
        throw new Error(`Error deleting product ${error?.message}`)
    }
}