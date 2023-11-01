import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-9 w-full h-full py-3 items-center'>
            <div className='flex space-x-2'>
                <Image
                    src="/logoicon.png"
                    width={50}
                    height={32}
                    alt='logoicon'
                />
               <h1 className='hidden sm:flex font-extrabold text-4xl'>Furnitees</h1>
            </div>
            <div className='hidden sm:flex'>
                <ul className='hidden md:flex space-x-8 lg:space-x-10 2xl:space-x-14'>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='flex space-x-4 sm:space-x-8'>
                <Image
                    src='/account.svg'
                    height={28}
                    alt='icon'
                    width={28}
                />
                <Image
                    src="/search.svg"
                    height={25}
                    alt='icon'
                    width={25}
                />
                <Image
                    src="/heart.svg"
                    height={25}
                    alt='icon'
                    width={25}
                />
                <Image
                    src="/cart.svg"
                    height={27}
                    alt='icon'
                    width={27}
                />
            </div>
        </nav>
    )
}

export default Navbar