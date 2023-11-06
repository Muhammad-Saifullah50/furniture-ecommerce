import { ProductCard } from '@/components'
import { Button } from '@/components/ui/button'
import { fetchProducts } from '@/lib/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface Product {
  id: string
  name: string
  desc: string
  shortDesc: string
  createdAt: string
  updatedAt: string
  price: string
  image: string
}
const ShopPage = async () => {

  const response = await fetchProducts()
  const products = await response.json()
  // console.log(products)
  return (
    <section>
      <div className='relative z-0 w-full flex items-center justify-end max-sm:h-[40vh] h-[50vh] '>
        <Image
          src="/banner.png"
          fill
          alt='banner'
          className='object-fill opacity-75'
        />
        <div className='relative justify-center flex w-full h-full items-center top-0 left-0 z-10 '>
          <h2 className='text-gold-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold py-2'>Shop</h2>
        </div>
      </div>

      <div className='bar h-24 bg-[#F9F1E7]'>
        pagination
      </div>

      <section className='mt-10'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  w-[90vw] mx-auto gap-x-6 gap-y-28 my-10 '>
          {products?.data?.map((product: Product) => (
              <ProductCard
                key={product.id}
                id={product.id} 
                title={product.name}
                shrtdesc={product.shortDesc}
                price={product.price}
                image={product.image}

              />
          ))}
        </div>

        <div className='btns flex justify-center items-center gap-4 my-28'>
          <Button size={'icon'} className='bg-gold-primary hover:bg-gold-secondary'>
            1
          </Button>
          <Button size={'icon'} className='bg-gold-primary hover:bg-gold-secondary'>
            2
          </Button>
          <Button size={'icon'} className='bg-gold-primary hover:bg-gold-secondary'>
            3
          </Button>
          <Button className='bg-gold-primary hover:bg-gold-secondary'>
            Next
          </Button>
        </div>

        <div className='bottombar bg-[#F9F1E7] flex justify-evenly py-10'>
          <div className='flex items-center gap-2'>
            <Image
              src={'/trophy.svg'}
              width={30}
              height={30}
              alt='icon'
            />
            <div>
              <h5 className='font-semibold'>High Quality</h5>
              <p className='text-primary-gray'>Crafted from top materials</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Image
              src={'/guarantee.svg'}
              width={30}
              height={30}
              alt='icon'
            />
            <div>
              <h5 className='font-semibold'>Warranty Protection</h5>
              <p className='text-primary-gray'>Over 2 years</p>
            </div>

          </div>

          <div className='flex items-center gap-2'>
            <Image
              src={'/shipping.svg'}
              width={30}
              height={30}
              alt='icon'
            />
            <div>
              <h5 className='font-semibold'>Free Shipping</h5>
              <p className='text-primary-gray'>Order over 150 $</p>
            </div>

          </div>
          <div className='flex items-center gap-2'>
            <Image
              src={'customer.svg'}
              width={30}
              height={30}
              alt='icon'
            />
            <div>
              <h5 className='font-semibold'>24 / 7 Support</h5>
              <p className='text-primary-gray'>Dedicated support</p>
            </div>

          </div>
        </div>
      </section>
    </section>
  )
}

export default ShopPage