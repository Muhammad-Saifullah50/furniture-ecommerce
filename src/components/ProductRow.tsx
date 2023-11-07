import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

interface ProductRowProps {
    id: string
    name: string
    image: string
    createdAt: string
    price: string
}
const ProductRow = ({ id, name, image, createdAt, price }: ProductRowProps) => {
    return (<>
        <tr className='border-b-[1px] border-black m-2'>
            <td className='px-3'>{id}</td>
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
                <Button size={'icon'} variant={'destructive'}>
                    <Image
                        src={'/trash.svg'}
                        alt={'edit'}
                        width={20}
                        height={20}
                    />
                </Button>
            </td>
        </tr>

    </>)
}

export default ProductRow
