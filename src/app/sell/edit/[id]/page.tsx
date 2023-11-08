'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useSession } from "next-auth/react"
import { fetchProductById } from "@/lib/products.actions"
import { useState, useEffect } from "react"
import { RotatingLines } from "react-loader-spinner"
import Image from "next/image"
import { useRouter } from "next/navigation"

const EditProductPage = ({ params }: { params: { id: string } }) => {
    const session = useSession()
    if (!session) return

    useEffect(() => {
        const id = params.id

        const fetchData = async () => {
            const existingData = await fetchProductById(id)

            setForm({
                name: existingData.product.name,
                desc: existingData.product.desc,
                shortDesc: existingData.product.shortDesc,
                price: existingData.product.price,
                image: existingData.product.image
            })

        }
        fetchData()
    }, [])

    const router = useRouter()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        desc: '',
        shortDesc: '',
        price: '',
        image: ''
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const productData = {
                id: params.id,
                name: form.name,
                desc: form.desc,
                shortDesc: form.shortDesc,
                price: form.price,
                imgPath: form.image
            }

            const response = await fetch('/api/products', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })


            const result = await response.json()
            console.log(result, 'result')

            if (result.status === 400 || result.status === 500) {
                setError(result.message)
            } else {
                router.push('/')
            }

        } catch (error: any) {
            throw new Error(`error posting product ${error?.message}`)
        } finally {
            setLoading(false)
        }
    }


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.includes('image')) return alert('Please upload an image file');

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const imageDataUrl = reader.result
            setForm({ ...form, image: imageDataUrl as string })
        }
    }
    return (
        <section className="flex justify-center items-center flex-col mt-10 gap-5">
            <h2 className='font-bold text-gold-primary text-3xl my-4 w-1/2 text-center '>Edit Product</h2>
            <form onSubmit={handleSubmit} className='w-1/2 flex flex-col gap-5'>

                {error && (
                    <div className='bg-red-100 py-2 text-sm flex flex-col justify-center items-center  border-red-600 border-2'>
                        <h6>Operation Failed</h6>
                        <p className='text-red-600'>{error}</p>
                    </div>
                )}
                <div>
                    <div className="flex justify-center items-center w-full">
                        {form.image && (<Image src={form.image} width={200} height={100} alt="product image" />)}
                    </div>
                    <Label >Product Image</Label>
                    <Input
                        type="file"
                        onChange={handleImageChange} />
                </div>
                <div>
                    <Label >Product Name</Label>
                    <Input
                        placeholder='Your product name'
                        value={form.name}
                        onChange={(e) => (setForm({ ...form, name: e.target.value }))} />
                </div>
                <div>
                    <Label >Short Description</Label>
                    <Textarea
                        placeholder='Provide a short description of your product'
                        value={form.shortDesc}
                        onChange={(e) => (setForm({ ...form, shortDesc: e.target.value }))}
                        rows={2} />
                </div>
                <div>
                    <Label >Detailed Description</Label>
                    <Textarea
                        value={form.desc}
                        placeholder='Provide a detailed description of your product'
                        rows={10}
                        onChange={(e) => (setForm({ ...form, desc: e.target.value }))} />
                </div>
                <div>
                    <Label >Price</Label>
                    <Input placeholder='Provide a price of your product'
                        type="number"
                        value={form.price}
                        onChange={(e) => (setForm({ ...form, price: e.target.value }))} />
                </div>
                <Button
                    className='bg-gold-primary hover:bg-gold-secondary flex gap-2 text-base'
                    disabled={loading}
                >Edit Product {loading && (<RotatingLines
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
