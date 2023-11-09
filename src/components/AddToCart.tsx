'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'

interface Props {
  name: string
  image: string
  price: string
}
const AddToCart = ({ name, image, price }: Props) => {
  const [quantity, setQuantity] = useState(1)
  const session = useSession()
  //@ts-ignore
const userId = session?.data?.user?.id
if (!userId) return null
  const handleClick = async () => {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        name,
        image,
        price,
        quantity
      }),
    })
  }
  return (
    <div className='flex justify-between'>
      <div className='flex gap-3 justify-center items-center text-lg'>
        <Button className=' text-lg' onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</Button>
        <span>{quantity}</span>
        <Button className=' text-lg' onClick={() => setQuantity(quantity + 1)}>+</Button>
      </div>

      <Button
        variant='showmore'
        onClick={handleClick}
        className=' outline outline-2 outline-[#B88E2F] text-base'
        size='xl'>Add to Cart</Button>
    </div>
  )
}

export default AddToCart
