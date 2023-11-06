import Image from 'next/image'
import React from 'react'

interface ProductRowProps {
    id: string
    name: string
    image: string
    createdAt: string
    price: string
}
const ProductRow = ({ id, name, image, createdAt, price }: ProductRowProps) => {
    return (
                    <tr className='border-b-[1px] border-black m-2'>
                        <td className='px-7'>{id}</td>
                        <td className='px-7'><Image src={image} alt={name} width={70} height={70} className='h-16 p-1 rounded-md m-2'/>
                        </td>
                        <td className='px-7'>{name}</td>
                        <td className='px-7'>Rs{' '}{price}</td>
                        <td className='px-7'>{createdAt.toLocaleString()}</td>
                    </tr>
    )
}

export default ProductRow
