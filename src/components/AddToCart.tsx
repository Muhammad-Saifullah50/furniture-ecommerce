'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'
import { useToast } from "@/components/ui/use-toast"
import { RotatingLines } from 'react-loader-spinner'


interface Props {
  name: string
  image: string
  price: string
}
const AddToCart = ({ name, image, price }: Props) => {

  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const session = useSession()
  const [loading, setLoading] = useState(false)

  //@ts-ignore
  const userId = session?.data?.user?.id
  if (!userId) return 'Please sign to purchase'
  const handleClick = async () => {

    try {
      setLoading(true)
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

      const result = await response.json()

      if (result.status === 400 || result.status === 500) {
        toast({
          title: 'Operation failed',
          description: result.message,
          variant: 'destructive',
        })
      } else {
        toast({
          title: 'Success',
          description: result.message,
        })
      }
    } catch (error) {
      throw new Error('Something went wrong')
    } finally {
      setLoading(false)
    }

  }
  return (
    <div className='flex justify-between'>
      <div className='flex gap-3 justify-center items-center text-lg'>
        <Button className=' text-lg' onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</Button>
        <span>{quantity}</span>
        <Button className=' text-lg' onClick={() => setQuantity(quantity + 1)}>+</Button>
      </div>

      <Button
        disabled={loading}
        onClick={handleClick}
        className='gap-3 text-base'
        size='xl'>{loading ? 'Adding' : 'Add'} to Cart
        {loading && (<RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="1"
          width="24"
          visible={true}
        />)}

      </Button>
    </div>
  )
}

export default AddToCart
