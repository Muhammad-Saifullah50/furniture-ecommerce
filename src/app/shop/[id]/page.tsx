import AddToCart from '@/components/AddToCart'
import { fetchProductById } from '@/lib/products.actions'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
    if (!params?.id) return

    const { product, productAuthor } = await fetchProductById(params?.id)

    const metadata: Metadata = {
        title: product?.name,
        description: product?.shortDesc
    }
    return (<>
        <section className='flex max-md:flex-col md:flex-row p-20 space-x-20 justify-between'>
            <div className='left w-full  md:w-1/2 '>
                <Image
                    src={product?.image}
                    width={500}
                    height={500}
                    alt={product?.name}
                    className='object-fill h-72'
                />
            </div>
            <div className='right w-full md:w-1/2 h-full   flex flex-col '>
                <div className="name flex flex-col gap-2">
                    <h2 className='text-4xl font-bold text-primary-gray'>{product?.name}</h2>
                    <p className='text-2xl text-[#9F9F9F] font-semibold '>Rs. {' '}{product?.price}</p>
                </div>
                <div className="shortDesc py-4 ">
                    {product?.shortDesc}
                </div>

                <div className='mt-14'>
                    <AddToCart
                        name={product?.name}
                        image={product?.image}
                        price={product?.price}
                    />
                </div>
            </div>
        </section>

        <section className='p-20 flex flex-col text-center'>
            <h4 className='my-4 text-2xl font-semibold'>Product Description</h4>
            <p>{product?.desc}</p>
        </section>

        <div className='bg-gray-200 w-full  h-[2px]' />

        <div className='flex my-10 gap-10 justify-center items-center'>
            <h3 className='font-semibold'>Posted By</h3>

            <div>
                <Image
                    src={productAuthor?.image}
                    width={70}
                    height={70}
                    alt={productAuthor?.name}
                    className='rounded-full object-contain' />
            </div>
            <div>
                <p className='font-bold'>{productAuthor?.name}</p>
                <p >{productAuthor?.email}</p>
            </div>
        </div>
    </>)
}

export default ProductDetailsPage
