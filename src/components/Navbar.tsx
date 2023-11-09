'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'
import Cart from './Cart'


const Navbar = () => {
    const pathname = usePathname();
    const session = useSession()


    const isActive = (path: string) => {
        return (pathname === path)
    }
    return (
        <nav className='flex justify-between px-9 w-full h-full py-3 items-center'>
            <div className='flex space-x-2'>
                <Image
                    src='/logoicon.png'
                    width={30}
                    height={30}
                    alt='logoicon'
                />
                <h1 className='hidden sm:flex font-extrabold text-4xl'>Furnitees</h1>
            </div>
            <div className='hidden sm:flex'>
                <ul className='hidden md:flex space-x-8 lg:space-x-10 2xl:space-x-14'>
                    <li
                        className={`${isActive('/') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary' : ''}`}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={`${isActive('/shop') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary' : ''}`}>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li
                        className={`${isActive('/cart') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary' : ''}`}
                    >
                        <Link href="/cart">My Cart</Link>
                    </li>
                    <li className={`${isActive('/sell') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary' : ''}`}
                    >
                        <Link href="/sell">Become a Seller</Link>
                    </li>
                </ul>
            </div>
            <div className='flex space-x-4 sm:space-x-8 '>
                <div className='group'>
                    <Image
                        //@ts-ignore
                        src={session.status === 'authenticated'
                            ? session?.data?.user?.image === ''
                                ? '/profile.svg'
                                : session?.data?.user?.image
                            : '/account.svg'
                        } height={28}
                        alt='icon'
                        width={28}
                        className='rounded-full mt-1'
                    />
                    <div className='group-hover:flex flex-col 
                 hidden absolute z-50  gap-4 w-44 py-10 top-12 px-4 right-10 bg-white  shadow-2xl text-base'>
                        {session.status === 'authenticated' ? <p> Signed in as <span className='font-semibold'>{session?.data?.user?.name}</span></p> : (<><p>Not Signed in</p>
                            <Link href={'/signin'}><Button className='bg-gold-primary hover:bg-gold-secondary w-full'>Sign In</Button></Link></>)}

                        {session.status === 'authenticated' ? (<Button className='bg-gold-primary hover:bg-gold-secondary' onClick={() => signOut()}>Sign out</Button>) : null}
                    </div>
                </div>
                <Image
                    src="/search.svg"
                    height={25}
                    alt='icon'
                    width={25}
                />

                <Cart />

            </div>
        </nav>
    )
}

export default Navbar