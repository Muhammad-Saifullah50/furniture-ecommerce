import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import ShareBtn from "./ShareBtn"

interface ProductCardProps {
    id: string
    title: string
    image: string
    shrtdesc: string
    price: string

}
const ProductCard = ({ id, title, image, shrtdesc, price }: ProductCardProps) => {
    return (<>
        <div>


            <div className="w-full h-48 relative z-0 group">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="object-fill h-full w-full"
                />
                <Link href={`/shop/${id}`} className="cursor-pointer">
                    <div className="bg-[#F4F5F7] p-2 w-full max-h-36 truncate text-ellipsis overflow-hidden">
                        <h3 className="text-[#3A3A3A] text-xl font-semibold">{title}</h3>
                        <p className="text-[#898989] ">{shrtdesc}</p>
                        <p className="text-[#3A3A3A] text-xl font-semibold">Rs {price}</p>
                    </div>
                </Link>

                <div className=" overlay hidden group-hover:flex z-10 w-full h-full absolute bg-opacity-80 top-0 left-0 bg-[#3A3A3A] justify-center flex-col p-5 gap-5">

                    <div className="btns flex justify-center my-4 gap-5 text-white font-semibold">
                        <div className="flex flex-col justify-center items-center ">
                            <ShareBtn productId={id}/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src='/cart.svg'
                                alt='cart'
                                width={30}
                                height={30}
                                className="invert"
                            />
                            <p>Add to Cart</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default ProductCard