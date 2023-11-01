export const getAllProducts = async () => {
    try {
        const products = await fetch('http://localhost:3000/api/products')
        return products
    } catch (error: any) {
        throw new Error(`Error fetching products ${error?.message}`)
    }
}