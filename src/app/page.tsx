import { ProductCard, MySlider } from '@/components'
import { Button } from '@/components/ui/button'
import { fetchProducts } from '@/lib/products'
import Image from 'next/image'
import { Product } from './shop/page'

export default async function Home() {
  const response = await fetchProducts()
  const products = await response.json()
  return (<>
    <section>
      <div className='relative z-0 w-full flex items-center justify-end max-sm:h-[40vh] h-[80vh] '>
        <Image
          src="/banner.png"
          fill
          alt='banner'
          className='object-fill opacity-75'
        />
        <div className='relative justify-center flex flex-col top-0 left-0 z-10 w-full md:w-1/2 h-full max-md:p-7 p-5'>

          <h2 className='text-gold-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold py-2'>Discover Our New Collection</h2>
          <p className='text-base text-tertiary-gray font-medium leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde harum ex dolor assumenda deserunt aut minima consequuntur facilis tempora.</p>
          <Button className='my-3 bg-gold-primary hover:bg-gold-secondary text-base' size='lg'>Shop Now</Button>
        </div>
      </div>
    </section>

    <section>
      <div className='my-8'>
        <h3 className='text-tertiary-gray font-bold text-[32px] text-center'>Browse The Range</h3>
        <p className='text-center text-xl text-quadruple-gray font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
        <h3 className='text-tertiary-gray font-bold text-[32px] text-center'>Our Products</h3>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5    w-[90vw] mx-auto gap-7'>
        {products.data.map((product: Product) => (
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
      <div className="showmore flex justify-center items-center my-7">
        <Button variant='showmore' className='my-3 outline outline-2 outline-[#B88E2F] text-base' size='xl'>Shop Now</Button>
      </div>
    </section>

    <section >
      <div className='flex w-full max-md:flex-col items-center gap-4 bg-[#FCF8F3] py-6 pl-6 h-[70vh] my-7'>
        <div className='left w-1/3 max-md:w-full flex flex-col justify-center items-start gap-3'>
          <h2 className='text-primary-gray text-4xl font-bold'>50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <Button className='my-3 bg-gold-primary hover:bg-gold-secondary text-base' size='lg'>Explore More</Button>
        </div>
        <div className='slider max-md:w-full w-2/3 '><MySlider /></div>
      </div>
    </section>

    <section>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-secondary-gray text-xl font-semibold' >Share your setup with</h2>
        <h1 className='font-bold text-primary-gray text-[32px]'> #FuniroFurniture</h1>
      </div>
      <div className='xl:columns-6 lg:columns-5 md:columns-4 sm:columns-3 columns-2 space-y-5 p-5'>
        <Image
          src='/2.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery2.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery3.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery4.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery5.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery6.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery7.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery8.png'
          width={320}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/gallery9.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/1.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
        <Image
          src='/3.png'
          width={200}
          height={200}
          className='object contain break-inside-avoid rounded-lg'
          alt='gallery image'
        />
      </div>
    </section>
  </>)
}