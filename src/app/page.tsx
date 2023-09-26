import { ProductCard } from '@/components'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {

  return (<>
    <section>
      <div className='relative z-0 w-full h-[80vh]'>
        <Image
          src="/banner.png"
          fill
          alt='banner'
          className='object-fill'
        />
        <div className='relative top-16 z-10 bg-[#FFF3E3] w-fit h-fit ml-[30rem] mr-10 p-7'>

          <h3 className='text-[#333333] text-base font-semibold tracking-[3px]'>New Arrivals</h3>
          <h2 className='text-[#B88E2F] text-[46px] font-bold leading-[60px] py-2'>Discover Our New Collection</h2>
          <p className='text-base text-[#333333] font-medium leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde harum ex dolor assumenda deserunt aut minima consequuntur facilis tempora.</p>
          <Button className='my-3 bg-[#B88E2F] hover:bg-[#8b6918] text-base' size='lg'>Shop Now</Button>
        </div>
      </div>
    </section>

    <section>
      <div className='my-8'>
        <h3 className='text-[#333333] font-bold text-[32px] text-center'>Browse The Range</h3>
        <p className='text-center text-xl text-[#666666] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className='flex gap-5 justify-evenly items-center w-full my-8 flex-wrap px-5'>
        <div className=' flex flex-col justify-center items-center'>
          <Image
            src="/1.png"
            width={230}
            height={200}
            alt='image'
            className='object-fill'
          />
          <p className='text-base mt-3'>Living</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <Image
            src="/2.png"
            width={230}
            height={200}
            alt='image'
            className='object-contain'
          />
          <p className='text-base mt-3'>Bedroom</p>
        </div>
        <div className=' flex flex-col justify-center items-center'>
          <Image
            src="/3.png"
            width={230}
            height={200}
            alt='image'
            className='object-contain'
          />
          <p className='text-base mt-3'>Dining</p>
        </div>
      </div>
    </section>

    <section>
      <div className='my-8'>
        <h3 className='text-[#333333] font-bold text-[32px] text-center'>Our Products</h3>
      </div>
      <div className='grid grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-[90vw] mx-auto gap-7'>
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
      </div>
    </section>
  </>)
}
