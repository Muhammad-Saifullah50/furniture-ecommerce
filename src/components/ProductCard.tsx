import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

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
            <Link href={`/shop/${id}`}>

                <div className="w-full h-48 relative z-0 group">
                    <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        className="object-fill h-full w-full"
                    />
                    <div className="bg-[#F4F5F7] p-2 w-full max-h-36 truncate text-ellipsis">
                        <h3 className="text-[#3A3A3A] text-xl font-semibold">{title}</h3>
                        <p className="text-[#898989] ">{shrtdesc}</p>
                        <p className="text-[#3A3A3A] text-xl font-semibold">Rs {price}</p>
                    </div>
                    <div className=" overlay hidden group-hover:flex z-10 w-full h-full absolute bg-opacity-80 top-0 left-0 bg-[#3A3A3A] justify-center flex-col p-5 gap-5">
                        <Button variant='secondary' className="text-[#B88E2F] font-semibold">Add to Cart</Button>
                        <div className="btns flex justify-center my-4 text-white font-semibold">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <Image
                                    src='/share.svg'
                                    alt='share'
                                    width={30}
                                    height={30}
                                />
                                <p>Share</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                </Link>

            </div>
    </>)
}

export default ProductCard