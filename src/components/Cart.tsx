'use client'
import { getUserCartItems } from '@/lib/products.actions'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { CartItem } from '.'


const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const session = useSession()

    useEffect(() => {
        const getData = async () => {
            //@ts-ignore
            const cartItems = await getUserCartItems(session?.data?.user?.id)
            setCartItems(cartItems)
        }
        getData()
    }, [cartItems.length])

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

                    /></SheetTrigger>
                <SheetContent className='px-6'>
                    <SheetHeader>
                        <SheetTitle>Your Shopping Cart</SheetTitle>
                        <SheetDescription>
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

                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter >
                        <div className='flex flex-col items-center w-full font-semibold gap-8 mt-8'>
                            <p> Total Amount: <span className='text-gold-primary'>Rs {totalPrice}</span></p>
                            <Button className='w-full text-base font-semibold'>Checkout</Button>
                        </div>

                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default Cart
