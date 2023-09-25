import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <section>
      <div className=' z-0 w-full h-full'>
        <Image
          src="/banner.png"
          fill
          alt='banner'
          className='object-contain'
        />
      </div>
      <div className='fixed z-10 bg-[#FFF3E3] w-fit h-fit mt-20 ml-[30rem] mr-10 p-7'>
        <h3 className='text-[#333333] text-base font-semibold tracking-[3px]'>New Arrivals</h3>
        <h2 className='text-[#B88E2F] text-[46px] font-bold leading-[60px] py-2'>Discover Our New Collection</h2>
        <p className='text-base text-[#333333] font-medium leading-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde harum ex dolor assumenda deserunt aut minima consequuntur facilis tempora.</p>
        <Button className='my-3 bg-[#B88E2F] hover:bg-[#8b6918] text-base' size='lg'>Shop Now</Button>
      </div>
    </section>
  )
}
