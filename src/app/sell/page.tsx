import { Button } from '@/components/ui/button'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const SellerPage = async () => {
    const session = await getServerSession(authOptions)
    // console.log(session)
    if (!session) return null
    return (
        <section className='min-h-[80vh]'>
            <h2 className='font-bold text-gold-primary text-3xl my-4  text-center'>  <span className='capitalize text-black'>{session?.user?.name}&apos;s</span> Seller Dashboard</h2>

            <Link href={"/sell/new"}>
                <Button className='my-3 bg-gold-primary hover:bg-gold-secondary text-base' size='lg'>Sell a new product</Button>
            </Link>

        </section>
    )
}

export default SellerPage
