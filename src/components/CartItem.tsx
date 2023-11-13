'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from './ui/button'
import { RotatingLines } from 'react-loader-spinner'
import { deleteCartItem } from '@/lib/products.actions'
import { useToast } from './ui/use-toast'

interface Props {
    itemId: string
    name: string
    image: string
    price: string
    quantity: string
    styles?: string
}
const CartItem = ({ itemId, name, image, price, quantity, styles }: Props) => {
    const [loading, setLoading] = useState(false)


    const handleDelete = async (id: string) => {
        try {
            setLoading(true)
            await deleteCartItem(id)
        } catch (error) {
            throw new Error('Error deleting product')
        } finally {
            setLoading(false)
        }
    }
    return (
        <article className={`py-4 flex items-center ${styles}`} >
            <div>
                <Image src={image} alt={name} width={50} height={50} className='rounded-lg object-fill w-14 h-14' />
            </div>
            <div className='flex flex-col text-base items-center justify-center max-w-sm flex-wrap '>
                <p className='font-semibold  '>{name}</p>
                <p>{quantity} x <span className='text-gold-primary'>Rs {price}</span></p>
            </div>
            <div>
                <Button
                    size={'icon'}
                    variant={'destructive'}
                    disabled={loading}
                    onClick={() => handleDelete(itemId)}
                >
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
            </div>
        </article>
    )
}

export default CartItem
