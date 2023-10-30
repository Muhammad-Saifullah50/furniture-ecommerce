import { ProductCard } from '@/components'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ShopPage = () => {
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
        Dummy Text
      </div>

      <section className='mt-10'>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  w-[90vw] mx-auto gap-7'>
          <ProductCard
            title='Syltherine'
            image='/image 1.png'
            desc='Stylish cafe chair'
            price='Rp 2.500.000'
          />
          <ProductCard
            title='Leviosa'
            image='/image 2.png'
            desc='Stylish cafe chair'
            price='Rp 2.500.000'
          />
          <ProductCard
            title='Lolito'
            image='/image 3.png'
            desc='Luxury big sofa'
            price='Rp 7.000.000'
          />
          <ProductCard
            title='Respira'
            image='/image 4.png'
            desc='Outdoor bar table and store'
            price='Rp 500.000'
          />
          <ProductCard
            title='Muggo'
            image='/image 5.png'
            desc='Small Mug'
            price='Rp 150.000'
          />
          <ProductCard
            title='Grifo'
            image='/image 6.png'
            desc='Night Lamp'
            price='Rp 1.500.000'
          />
          <ProductCard
            title='Pingky'
            image='/image 7.png'
            desc='Cute bed set'
            price='Rp 2.500.000'
          />
          <ProductCard
            title='Potty'
            image='/image 8.png'
            desc='Minimalist flower pot'
            price='Rp 500.000'
          />
          <ProductCard
            title='Muggo'
            image='/image 5.png'
            desc='Small Mug'
            price='Rp 150.000'
          />
          <ProductCard
            title='Grifo'
            image='/image 6.png'
            desc='Night Lamp'
            price='Rp 1.500.000'
          />
          <ProductCard
            title='Pingky'
            image='/image 7.png'
            desc='Cute bed set'
            price='Rp 2.500.000'
          />
          <ProductCard
            title='Potty'
            image='/image 8.png'
            desc='Minimalist flower pot'
            price='Rp 500.000'
          />
        </div>

        <div className='btns flex justify-center items-center gap-4 my-10'>
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