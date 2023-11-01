import { db } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    try {
        const products = await db.products.findMany()
        return NextResponse.json(
            { message: "Data retrieved successfully", data: products },
            { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { message: `Somethihng went wrong ${error?.message}` },
            { status: 500 })
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const response = await request.json()
        const { name, createdAt, updatedAt, price, image, desc, shortDesc } = response

        const newProduct = await db.products.create({
            data: {
                name,
                desc,
                shortDesc,
                createdAt,
                updatedAt,
                price,
                image
            }
        })

        return NextResponse.json(
            { message: "Product added successfully", data: newProduct },
            { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { message: `Something went wrong ${error?.message}` },
            { status: 500 })
    }
}