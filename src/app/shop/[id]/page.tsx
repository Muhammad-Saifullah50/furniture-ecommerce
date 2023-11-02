import AddToCart from '@/components/AddToCart'
import Counter from '@/components/Counter'
import { fetchProductById } from '@/lib/products'
import Image from 'next/image'
import React from 'react'

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
    if (!params?.id) return
    const productDetails = await fetchProductById(params?.id)
    return (<>
        <section className='flex max-md:flex-col md:flex-row p-20 space-x-20 justify-between'>
            <div className='left w-full  md:w-1/2 '>
                <Image
                    src={productDetails?.image}
                    width={500}
                    height={500}
                    alt={productDetails?.name}
                    className='object-fill h-72'
                />
            </div>
            <div className='right w-full md:w-1/2 h-full   flex flex-col '>
                <div className="name flex flex-col gap-2">
                    <h2 className='text-4xl font-bold text-primary-gray'>{productDetails?.name}</h2>
                    <p className='text-2xl text-[#9F9F9F] font-semibold '>Rs. {' '}{productDetails?.price}</p>
                </div>
                <div className="shortDesc py-4 ">
                    {productDetails?.shortDesc}
                </div>

                <div className='flex justify-between mt-14'>
                    <Counter />
                    <AddToCart />
                </div>
            </div>
        </section>

        <section className='p-20 flex flex-col text-center'>
            <h4 className='my-4 text-2xl font-semibold'>Product Description</h4>
            <p>{productDetails?.desc}</p>
        </section>
    </>)
}

export default ProductDetailsPage
