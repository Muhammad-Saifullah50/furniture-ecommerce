import Image from "next/image"
import { Button } from "./ui/button"
interface ProductCardProps {
    title: string
    image: string
    desc: string
    price: string

}
const ProductCard = ({ title, image, desc, price }: ProductCardProps) => {
    return (
        <div className="w-full">
            <div className="w-full relative z-0">
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
            </div>
            <div className="overlay hidden hover:block z-10 w-full h-full opacity-20 absolute top-0 left-0 bg-[#3A3A3A]">
                <Button>Add to Cart</Button>
                <div className="btns">
                    <div>
                        <Image
                            src='/share.svg'
                            alt='share'
                            width={30}
                            height={30}
                        />
                        <p>Share</p>
                    </div>
                    <div>
                        <Image
                            src='/compare.svg'
                            alt='comare'
                            width={30}
                            height={30}
                        />
                        <p>Compare</p>
                    </div>
                    <div>
                        <Image
                            src='/heart.svg'
                            alt='heart'
                            width={30}
                            height={30}
                        />
                        Like
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard