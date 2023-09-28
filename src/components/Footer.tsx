import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <footer>
            <div className='flex justify-between p-10 border-t-[1px] border-gray-200 mt-5'>

                <div className='w-2/5 flex flex-col gap-6'>
                    <div className='text-black font-bold text-2xl'>Furniro.</div>
                    <div>
                        <p className='text-quadruple-gray'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                    </div>
                </div>

                <div className='flex flex-col gap-6 w-1/5'>
                    <h5 className='text-quadruple-gray'>Links</h5>
                    <ul className='flex flex-col gap-6'>
                        <li className='text-black font-medium'>Home</li>
                        <li className='text-black font-medium'>Shop</li>
                        <li className='text-black font-medium'>About</li>
                        <li className='text-black font-medium'>Contact</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-6 w-1/5'>
                    <h5 className='text-quadruple-gray'>Help</h5>
                    <ul className='flex flex-col gap-6'>
                        <li className='text-black font-medium'>Payment Options</li>
                        <li className='text-black font-medium'>Returns</li>
                        <li className='text-black font-medium'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='w-1/5 flex flex-col gap-6 '>
                    <h5 className='text-quadruple-gray'>Newsletter</h5>
                    <div>
                        <input
                            type="text"
                            placeholder='Enter your email address'
                            className='border-gray-200 border-2 rounded-lg text-base p-1 w-[98%]'
                        />
                        <Button className='my-3 bg-gold-primary hover:bg-gold-secondary' size='sm'>Subscribe</Button>
                    </div>
                </div>
            </div>

            <div className='py-6 border-t-[1px] border-gray-200 w-[92%] mx-auto'>
                <p className='text-quadruple-gray'>2023 Furniro. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer