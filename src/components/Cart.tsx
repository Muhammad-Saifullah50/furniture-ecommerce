'use client'
import { getUserCartItems } from '@/lib/products.actions'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { CartItem } from '.'
import { usePathname } from 'next/navigation'

interface CartItems {
    id: string
    name: string
    image: string
    price: string
    quantity: string
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItems[]>([])
    const session = useSession()
 
}

const totalPrice = cartItems.reduce((total, item) => {
    //@ts-ignore
    return total + parseFloat(item.price) * item.quantity
}, 0)
return (
    <div>
        <Sheet>
            <SheetTrigger>
                <Image
                    src="/cart.svg"
                    height={27}
                    alt='icon'
                    width={27}

                />
                <div className='bg-red-700 absolute top-3 text-white rounded-full px-1 right-9 text-[10px]'>{cartItems.length}</div>
            </SheetTrigger>
            <SheetContent className='px-6'>
                <SheetHeader>
                    <SheetTitle>Your Shopping Cart</SheetTitle>
                    {cartItems.map((item: any) => (
                        <CartItem
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}
                            key={item.id}
                            itemId={item.id}
                        />
                    ))}
                </SheetHeader>
                <SheetFooter >
                    <div className='flex flex-col items-center w-full font-semibold gap-8 mt-8'>
                        <p> Total Amount: <span className='text-gold-primary'>Rs {totalPrice}</span></p>
                        <Button className='w-full text-base font-semibold'>Checkout</Button>
                    </div>

                </SheetFooter>
            </SheetContent>
        </Sheet>

    </div >
)
}

export default Cart
