'use server'

import { revalidatePath } from "next/cache"
import { db } from "./prisma"
import { notFound } from "next/navigation"


export const fetchProducts = async (path: string, pageNumber = 1, pageSize = 10) => {
    try {
        const params = new URLSearchParams({
            pageNumber: pageNumber.toString(),
            pageSize: pageSize.toString()
        })
        const products = await fetch(`http://localhost:3000/api/products`)
        revalidatePath(path)
        return products
    } catch (error: any) {
        if (error) notFound()
        throw new Error(`Error fetching products ${error?.message}`)

    }
}


export const fetchProductsByUserId = async (id: string) => {
    try {

        const userProducts = await db.products.findMany({
            //@ts-ignore
            where: { usersId: id }
        })
        // console.log(userProducts)
        return userProducts
    } catch (error: any) {
        notFound()
    }
}
export const fetchProductById = async (id: string) => {
    try {

        const product = await db.products.findUnique({ where: { id: id } })
        const productAuthor = await db.users.findUnique({ where: { id: product?.usersId } })
        return { product, productAuthor }
    } catch (error: any) {
        notFound()

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

export const deleteCartItem = async (id: string) => {
    try {
        const itemToDelete = await db.cart.delete({ where: { id: id } })
    } catch (error: any) {
        throw new Error(`Error deleting product ${error?.message}`)
    }

} 