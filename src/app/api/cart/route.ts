import { db } from "@/lib/prisma";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const data = await request.json()
    console.log(data)
    const { userId, name, image, price, quantity } = data

    console.log(db)
    const cartData = await db.cart.create({
        data: {
            name: name,
            image: image,
            price: price,
            quantity: quantity,
            // user: {
            //     connect: { id: userId }
            // }
        }
    })


}