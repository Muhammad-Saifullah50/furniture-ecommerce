import { authOptions } from '@/lib/authOptions'
import { fetchProductsByUserId } from '@/lib/products'
import { getServerSession } from 'next-auth'
import React from 'react'
import { ProductRow } from '.'

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

            <table>
                <thead>
                    <tr className='border-b-[1px] border-black'>
                        <th className='px-4'>Product ID</th>
                        <th className='px-4'>Image</th>
                        <th className='px-4'>Name</th>
                        <th className='px-4'>Price</th>
                        <th className='px-4'>Posted At</th>
                    </tr>
                </thead>


                {userProducts?.map((product: Product) => (
                    <tbody key={product.id}>
                        <ProductRow
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            createdAt={product.createdAt}
                            price={product.price}
                        />
                    </tbody>
                ))}
            </table>
        </section>
    )
}

export default SellerDashboard
