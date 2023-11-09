import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    try {
        const data = await request.json()
        const { userId, name, image, price, quantity } = data

        const existingProduct = await db.cart.findFirst({
            where: {
                name: name
            }
        })

        if (existingProduct) {
            await db.cart.update({
                where: {
                    id: existingProduct.id
                },
                data: {
                    quantity: existingProduct.quantity + quantity
                }
            })
        }

        else {
            await db.cart.create({
                data: {
                    name: name,
                    image: image,
                    price: price,
                    quantity: quantity,
                    user: {
                        connect: { id: userId }
                    }
                }
            })
        }

        return NextResponse.json({ message: "Product added successfully", status: 200 })
    } catch (error: any) {
        return NextResponse.json({ message: `Failed to add product ${error?.message}`, status: 200 })
    }
}