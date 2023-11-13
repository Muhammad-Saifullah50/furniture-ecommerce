'use client'
import React, { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'

const ShareBtn = ({productId}: {productId: string}) => {

    const [copied, setCopied] = useState(false)
    const LinktoCopy = `https://furnitees.vercel.app/shop/${productId}`
    const handleCopy = () => {
        setCopied(true)
        navigator.clipboard.writeText(LinktoCopy)

        setTimeout(() => {
            setCopied(false)
        }, 10000)
    }
    return (

        <Dialog>
            <DialogTrigger>
                <Image
                    src='/share.svg'
                    alt="share"
                    width={30}
                    height={30}
                    className="cursor-pointer object-contain"
                />
            </DialogTrigger>
            <p>Share</p>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Share Product</DialogTitle>
                    <DialogDescription>
                        Copy the link below to share this product

                        <div className='mt-4 flex'>
                            <Input value={LinktoCopy} 
                                className='bg-transparent text-base ' />
                            <Button
                                className='bg-gold-primary hover:bg-gold-secondary ml-1' size='icon'
                                onClick={handleCopy}>
                                <Image
                                    src={!copied ? `/copy.svg` : '/tick.svg'}
                                    alt='copy'
                                    width={copied ? 30 : 20}
                                    height={copied ? 30 : 20}
                                    className='invert'
                                />
                            </Button>
                        </div>
                    </DialogDescription>

                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button className='bg-gold-primary hover:bg-gold-secondary font-medium'>Done</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default ShareBtn
