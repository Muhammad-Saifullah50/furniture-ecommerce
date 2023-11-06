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
                    <tr className='border-b-[1px] border-black'>
                        <td className='px-4'>{id}</td>
                        <td className='px-4'><Image src={image} alt={name} width={70} height={70}/>
                        </td>
                        <td className='px-4'>{name}</td>
                        <td className='px-4'>Rs{' '}{price}</td>
                        <td className='px-4'>{createdAt.toLocaleString()}</td>
                    </tr>
    )
}

export default ProductRow
