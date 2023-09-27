import Image from "next/image"
import { Button } from "./ui/button"

interface ProductCardProps {
    title: string
    image: string
    desc: string
    price: string

}
const ProductCard = ({ title, image, desc, price }: ProductCardProps) => {
    return (<>
        <div className="w-full">
            <div className="w-full relative z-0 group">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                />
                <div className="bg-[#F4F5F7] p-2 w-full ">
                    <h3 className="text-[#3A3A3A] text-xl font-semibold">{title}</h3>
                    <p className="text-[#898989]">{desc}</p>
                    <p className="text-[#3A3A3A] text-xl font-semibold">{price}</p>
                </div>
                <div className=" overlay hidden group-hover:flex z-10 w-full h-full absolute bg-opacity-80 top-0 left-0 bg-[#3A3A3A] justify-center flex-col p-5 gap-5">
                    <Button variant='secondary' className="text-[#B88E2F] font-semibold">Add to Cart</Button>
                    <div className="btns flex justify-between my-4 text-white font-semibold">
                        <div  className="flex flex-col justify-center items-center gap-2">
                            <Image
                                src='/share.svg'
                                alt='share'
                                width={30}
                                height={30}
                            />
                            <p>Share</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Image
                                src='/compare.svg'
                                alt='comare'
                                width={30}
                                height={30}
                            />
                            <p>Compare</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Image
                                src='/Heart.svg'
                                alt='heart'
                                width={30}
                                height={30}
                            />
                            Like
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default ProductCard