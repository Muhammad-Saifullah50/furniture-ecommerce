import { ProductCard } from '@/components'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import { Button } from '@/components/ui/button'
import { fetchProducts } from '@/lib/products.actions'
import Image from 'next/image'
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
const ShopPage = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {


  const response = await fetchProducts({
    path: '/shop',
    pageNumber: searchParams?.page ? +searchParams?.page : 1,
    pageSize: 8,
    searchString: searchParams.query || ''
  })

  const products = await response.json()
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

      <div className='h-24 bg-[#F9F1E7] flex justify-center items-center'>
        <Search />
      </div>


      <section className='mt-10'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  w-[90vw] mx-auto gap-x-6 gap-y-28 mb-40 '>
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


        <Pagination
          pageNumber={searchParams?.page ? +searchParams?.page : 1}
          isNext={products?.isNext}

        />

        <div className='bottombar bg-[#F9F1E7] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  p-10'>
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