'use client'
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import Image from 'next/image'
import Link from 'next/link';





const SideMenu = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return (pathname === path)
    }

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/menu.svg"
                        height={27}
                        alt='icon'
                        width={27}
                    />
                </SheetTrigger>

                <SheetContent className='px-6'>
                    <SheetHeader>
                        <SheetTitle>Side Menu</SheetTitle>
                    </SheetHeader>

                    <ul className="flex flex-col gap-5 mt-10">
                    <li
                        className={`${isActive('/') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary hover:bg-gold-primary hover:bg-opacity-40 w-full' : ''}`}
                    >
                        <Link className='border-b-2 border-gray-500 w-full' href="/">Home</Link>
                    </li>
                    <li
                        className={`${isActive('/shop') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary hover:bg-gold-primary hover:bg-opacity-40' : ''}`}>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li
                        className={`${isActive('/cart') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary hover:bg-gold-primary hover:bg-opacity-40' : ''}`}
                    >
                        <Link href="/cart">My Cart</Link>
                    </li>
                    <li className={`${isActive('/sell') ? 'underline underline-offset-4 decoration-4 decoration-gold-primary hover:bg-gold-primary hover:bg-opacity-40' : ''}`}
                    >
                        <Link href="/sell">Become a Seller</Link>
                    </li>
                </ul>
                </SheetContent>

            </Sheet>

        </div >
    )
}

export default SideMenu
