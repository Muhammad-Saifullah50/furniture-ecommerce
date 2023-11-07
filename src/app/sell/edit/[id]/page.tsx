'use client'
import { useState, useEffect } from "react"
const EditProductPage = () => {

    
  return (
    <section className="flex justify-center items-center flex-col mt-10 gap-5">
    <h2 className='font-bold text-gold-primary text-3xl my-4 w-1/2 text-center '>Hello <span className="text-black capitalize">{session?.data?.user?.name}</span>, what are you going to sell today??</h2>
    <form onSubmit={handleSubmit} className='w-1/2 flex flex-col gap-5'>

        {error && (
            <div className='bg-red-100 py-2 text-sm flex flex-col justify-center items-center  border-red-600 border-2'>
                <h6>Operation Failed</h6>
                <p className='text-red-600'>{error}</p>
            </div>
        )}
        <div>
            <Label >Product Image</Label>
            <Input
                placeholder='Upload a product image'
                type="file"
                onChange={handleImage} />
        </div>
        <div>
            <Label >Product Name</Label>
            <Input placeholder='Your product name' onChange={(e) => (productName.current = e.target.value)} />
        </div>
        <div>
            <Label >Short Description</Label>
            <Textarea
                placeholder='Provide a short description of your product'
                onChange={(e) => (shrtDesc.current = e.target.value)}
                rows={2} />
        </div>
        <div>
            <Label >Detailed Description</Label>
            <Textarea
                placeholder='Provide a detailed description of your product'
                rows={10}
                onChange={(e) => (desc.current = e.target.value)} />
        </div>
        <div>
            <Label >Price</Label>
            <Input placeholder='Provide a price of your product'
                type="number"
                onChange={(e) => (price.current = e.target.value)} />
        </div>
        <Button
            className='bg-gold-primary hover:bg-gold-secondary flex gap-2 text-base'
            disabled={loading}
        >Submit Product {loading && (<RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="1"
            width="24"
            visible={true}
        />)}</Button>

    </form>
</section>
  )
}

export default EditProductPage
