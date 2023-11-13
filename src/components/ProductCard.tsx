import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import ShareBtn from "./ShareBtn"
import AddToCart from "./AddToCart"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

interface ProductCardProps {
    id: string
    title: string
    image: string
    shrtdesc: string
    price: string

}
const ProductCard = async ({ id, title, image, shrtdesc, price }: ProductCardProps) => {
    const session = await getServerSession(authOptions)

    return (<>
        <div>
            <div className="w-full h-48 relative z-0 group ">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="object-fill h-full w-full rounded-t-lg"
                />
                <Link href={`/shop/${id}`} className="cursor-pointer">
                    <div className="bg-[#F4F5F7] p-2 w-full max-h-36 rounded-b-2xl">
                        <h3 className="text-[#3A3A3A] text-xl font-semibold truncate">{title}</h3>
                        <p className="text-[#898989] truncate ">{shrtdesc}</p>
                        <p className="text-[#3A3A3A] text-xl font-semibold truncate">Rs {price}</p>
                    </div>
                </Link>

                <div className=" overlay hidden group-hover:flex z-10 w-full h-full absolute bg-opacity-80 top-0 left-0 bg-[#3A3A3A] justify-center flex-col p-5 gap-5 rounded-t-lg">

                    <div className="btns flex justify-center my-4 gap-5 text-white font-semibold">
                        <div className="flex flex-col justify-center items-center ">
                            <ShareBtn productId={id}/>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                           <AddToCart name={title} image={image} price={price}/>
                            <p> {session && 'Add to Cart'}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default ProductCard