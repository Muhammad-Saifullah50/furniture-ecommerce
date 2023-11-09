'use client'
import { getUserCartItems } from '@/lib/products.actions'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'


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
    }, [])

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
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Your Cart</SheetTitle>
                        <SheetDescription>
                            {cartItems.map((item: any) => (
                                <div className='flex'>
                                    <Image src={item.image} alt={item.name} width={50} height={50} className='rounded-lg object-fill w-10 h-10'/>
                                </div>
                            ))}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default Cart
