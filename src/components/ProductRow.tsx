'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/prisma'
import { RotatingLines } from 'react-loader-spinner'
import { DeleteProduct } from '@/lib/products.actions'

interface ProductRowProps {
    id: string
    name: string
    image: string
    createdAt: string
    price: string
}


const ProductRow = ({ id, name, image, createdAt, price }: ProductRowProps) => {
    // const path = usePathname()
    // const [loading, setLoading] = useState(false)

    // const handleDelete = async () => {
    //     try {
    //         setLoading(true)
    //         await DeleteProduct(id, path)
    //     } catch (error) {
    //         throw new Error('Error deleting product')
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    return (<>
        <tr className='border-b-[1px] border-black m-2'>
            {/* <td className='px-3'>{id}</td>
            <td className='px-3'><Image src={image} alt={name} width={70} height={70} className='h-16 p-1 rounded-md m-2' />
            </td>
            <td className='px-3'>{name}</td>
            <td className='px-3'>Rs{' '}{price}</td>
            <td className='px-3'>{createdAt.toLocaleString()}</td>
            <td>
                <Link href={`/sell/edit/${id}`}>
                    <Button size={'icon'}>
                        <Image
                            src={'/edit.svg'}
                            alt={'edit'}
                            width={20}
                            height={20}
                            className='invert'
                        />
                    </Button>
                </Link>
            </td>
            <td>
                <Button
                    size={'icon'}
                    variant={'destructive'}
                    disabled={loading}
                    onClick={handleDelete}>
                    {loading ? (<RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="1"
                        width="24"
                        visible={true}
                    />) : (<Image
                        src={'/trash.svg'}
                        alt={'edit'}
                        width={20}
                        height={20}
                        
                    />)}

                </Button>
            </td> */}
        </tr>

    </>)
}

export default ProductRow
