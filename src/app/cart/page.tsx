'use client'
import { CartItem } from "@/components"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import Image from "next/image"
import useSWR from "swr"

export interface CartItems {
  id: string
  name: string
  image: string
  price: string
  quantity: string
}
const CartPage = () => {

  const session = useSession()
  //@ts-ignore
  const getData = async () => {
    //@ts-ignore
    const response = await fetch(`/api/cart?id=${session?.data?.user?.id}`)
    const result = await response.json()
    return result
  }

  //@ts-ignore
  const { data, error, isLoading } = useSWR(`/api/cart?id=${session?.data?.user?.id}`, getData, {
    refreshInterval: 100,
    refreshWhenHidden: false
  })


  const totalPrice = data?.cart?.reduce((total: any, item: any) => {
    //@ts-ignore
    return total + parseFloat(item.price) * item.quantity
  }, 0)

  return (
    <section className="min-h-screen">
      <div className='relative z-0 w-full flex items-center justify-end max-sm:h-[40vh] h-[50vh] '>
        <Image
          src="/cart.jpg"
          fill
          alt='banner'
          className='object-fill opacity-75'
        />
        <div className='relative justify-center flex w-full h-full items-center top-0 left-0 z-10 '>
          <h2 className='text-gold-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold py-2'>My Shopping Cart</h2>
        </div>
      </div>

      <div className="flex justify-center items-center my-7 text-lg font-semibold" >
        {!error && (<p> <span className="text-gold-primary">{data?.cart?.length}</span> Items in cart</p>)}
      </div>
      <div className="flex flex-col gap-4 z-50">
        {data?.cart?.map((product: CartItems) => (
          <CartItem
            key={product.id}
            itemId={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            styles="justify-between w-full px-10 shadow-lg shadow-gray-200 bg-[#f5f5e4] rounded-lg"
          />
        ))}
      </div>
      {error && <p className='text-center text-red-600 py-5'>You are not signed in. Please sign in again to view your cart</p>}
      <div className="flex justify-center items-center my-7 text-lg font-semibold" >
        {!error &&
          (<p> Total Amount: <span className='text-gold-primary'>Rs {totalPrice}</span></p>)}
      </div>

    </section >
  )
}

export default CartPage
