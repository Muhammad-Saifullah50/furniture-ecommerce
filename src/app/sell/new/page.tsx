'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Label } from "@radix-ui/react-label"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useRef, ChangeEvent } from "react"
import { RotatingLines } from "react-loader-spinner"
const SellPage = () => {

    const session = useSession()
    const [loading, setLoading] = useState(false)
    const {toast} = useToast()

    const router = useRouter()

    const image = useRef('')
    const productName = useRef('')
    const shrtDesc = useRef('')
    const desc = useRef('')
    const price = useRef('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const productData = {
                name: productName.current,
                desc: desc.current,
                shortDesc: shrtDesc.current,
                price: price.current,
                imgPath: image.current
            }

            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })

            
            const result = await response.json()
            console.log(result, 'result')

            if (result.status === 400 || result.status === 500) {
                toast({
                  title: 'Operation failed',
                  description: result.message,
                  variant: 'destructive',
                })
              } else {
                toast({
                  title: 'Success',
                  description: result.message,
                })
                router.push('/')
              }

        } catch (error: any) {
            throw new Error(`error posting product ${error?.message}`)
        } finally {
            setLoading(false)
        }
    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.includes('image')) return alert('Please upload an image file');

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result;

            if (typeof result === 'string') {
                image.current = result;
            }
        };
    };
    return (
        <section className="flex justify-center items-center flex-col mt-10 gap-5">
            <h2 className='font-bold text-gold-primary text-3xl my-4 w-1/2 text-center '>Hello <span className="text-black capitalize">{session?.data?.user?.name}</span>, what are you going to sell today??</h2>
            <form onSubmit={handleSubmit} className='w-1/2 flex flex-col gap-5'>

                
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

export default SellPage
