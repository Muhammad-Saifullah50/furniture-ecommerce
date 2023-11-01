import { fetchProductById } from '@/lib/products'
import Image from 'next/image'
import React from 'react'

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
    if (!params?.id) return
    const productDetails = await fetchProductById(params?.id)
    return (<>
        <section className='flex max-md:flex-col md:flex-row p-10 '>
            <div className='left w-full md:w-1/2'>
                <Image
                    src={productDetails?.image}
                    width={300}
                    height={300}
                    alt={productDetails?.name}
                    className=' object-cover'
                />
            </div>
            <div className='right w-full md:w-1/2'>
                <div className="name ">
                    <h2 className='text-4xl font-medium'>{productDetails?.name}</h2>
                    <p className='text-2xl text-[#9F9F9F] font-semibold'>Rs {' '}{productDetails?.price}</p>
                </div>
                <div className="shortDesc">
                    {productDetails?.shortDesc}
                </div>

                <div>Counter
                    Add to cart</div>
            </div>
        </section>

        <section>
            <h4>Product Description</h4>
            <p>{productDetails?.desc}</p>
        </section>
    </>)
}

export default ProductDetailsPage
