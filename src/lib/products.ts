import { db } from "./prisma"


export const fetchProducts = async (pageNumber = 1, pageSize = 10) => {
    try {
        const params = new URLSearchParams({
            pageNumber: pageNumber.toString(),
            pageSize: pageSize.toString()
        })
        const products = await fetch(`http://localhost:3000/api/products?${params.toString()}`)
        return products
    } catch (error: any) {
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
        throw new Error(`Error fetching product ${error?.message}`)
    }
}