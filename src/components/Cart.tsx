'use client'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { CartItem } from '.'
import useSWR from 'swr'
import { RotatingLines } from 'react-loader-spinner'
import { CartItems } from '@/app/cart/page'
import Link from 'next/link'



const Cart = () => {

    const session = useSession()

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
        <div>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/cart.svg"
                        height={27}
                        alt='icon'
                        width={27}

                    />
                    <div className='bg-red-700 absolute top-3 text-white rounded-full px-1 right-9 text-[10px]'>{data?.cart?.length}</div>
                </SheetTrigger>

                <SheetContent className='px-6'>
                    <SheetHeader>
                        <SheetTitle>Your Shopping Cart</SheetTitle>
                        {isLoading ?
                            (<div className='flex justify-center items-center py-3'>
                                <RotatingLines
                                    strokeColor="#B88E2F"
                                    strokeWidth="5"
                                    animationDuration="1"
                                    width="40"
                                    visible={true}
                                />
                            </div>
                            ) : (
                                data?.cart?.map((item: CartItems) => (
                                    <CartItem
                                        name={item.name}
                                        price={item.price}
                                        image={item.image}
                                        quantity={item.quantity}
                                        key={item.id}
                                        itemId={item.id}
                                        styles='justify-between'
                                    />
                                )))}
                        {error && <p className='text-center text-red-600 py-5'>You are not signed in. Please sign in again to view your cart</p>}
                    </SheetHeader>
                    <SheetFooter >
                        <div className='flex flex-col items-center w-full font-semibold gap-8 mt-8'>
                            {!error &&
                                (<p> Total Amount: <span className='text-gold-primary'>Rs {totalPrice}</span></p>)}
                                <Link href={'/checkout'}>
                            <Button
                                className='w-full text-base font-semibold'
                                disabled={error}
                                
                                >Checkout</Button></Link>
                        </div>

                    </SheetFooter>
                </SheetContent>

            </Sheet>

        </div >
    )
}

export default Cart
