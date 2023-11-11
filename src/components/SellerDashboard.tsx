import { fetchProductsByUserId } from '@/lib/products.actions'
import { getServerSession } from 'next-auth/next'
import React from 'react'
import { ProductRow } from '.'
import { authOptions } from '@/lib/authOptions'

export interface Product {
    id: string,
    name: string,
    desc: string,
    shortDesc: string,
    createdAt: string,
    updatedAt: string,
    price: string,
    image: string
}
const SellerDashboard = async () => {
    const session = await getServerSession(authOptions)
    //@ts-ignore
    const userProducts = await fetchProductsByUserId(session?.user?.id)
    // console.log(userProducts, 'userProducts')
    return (
        <section className='my-10 flex justify-center items-center w-full h-full'>

            <table className='h-full'>
                <thead >
                    {userProducts.length > 0 && (
                        <tr className='border-b-[1px] border-black mb-5'>
                            <th className='px-7'>Product ID</th>
                            <th className='px-7'>Image</th>
                            <th className='px-7'>Name</th>
                            <th className='px-7'>Price</th>
                            <th className='px-7'>Posted At</th>
                        </tr>
                    )}

                </thead>
                <tbody>
                    {userProducts?.map((product: Product) => (
                        <ProductRow
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            createdAt={product.createdAt}
                            price={product.price}
                        />
                    ))}
                </tbody>

            </table>
        </section>
    )
}

export default SellerDashboard
