'use client'
import { useState } from 'react'
import { Button } from './ui/button'

interface Props {
  name: string
  image: string
  price: string
}
const AddToCart = ({ name, image, price }: Props) => {
  const [count, setCount] = useState(1)

  const handleClick = async () => {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        image,
        price,
        count
      }),
    })
  }
  return (
    <div className='flex justify-between'>
      <div className='flex gap-3 justify-center items-center text-lg'>
        <Button className=' text-lg' onClick={() => setCount(count - 1)} disabled={count === 1}>-</Button>
        <span>{count}</span>
        <Button className=' text-lg' onClick={() => setCount(count + 1)}>+</Button>
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
