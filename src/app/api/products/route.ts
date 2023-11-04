import { db } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary";
import { ProductSchema } from "@/validations/ProductSchema";
import { ZodError } from "zod";

export const GET = async () => {
    try {
        const products = await db.products.findMany({
            orderBy: [{ createdAt: "desc" }]
        })
        return NextResponse.json(
            { message: "Data retrieved successfully", data: products },
            { status: 200 })
    } catch (error: any) {
        return NextResponse.json(
            { message: `Somethihng went wrong ${error?.message}` },
            { status: 500 })
    }
}


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const POST = async (request: NextRequest) => {
    try {
        const response = await request.json()
        const { name, createdAt, updatedAt, price, imgPath, desc, shortDesc } = response

        if (!imgPath) {
            return NextResponse.json(
                {
                    message: "Image path is required",
                    status: 400
                }
            );
        }
        const options = {
            use_filename: true, unique_filename: false,
            overwrite: true,
            trasformation: [{ width: 1000, height: 752, crop: "scale" }],
        };

        const imgResult = await cloudinary.uploader.upload(imgPath, options);
        const image = imgResult?.secure_url
        try {
            const dataToValidate = {
                name,
                shortDesc,
                desc,
                price,
                image
            }
            const validate = ProductSchema.parse(dataToValidate)

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
                { message: "Product added successfully", data: newProduct ,
                 status: 200 })
        } catch (error) {
            if (error instanceof ZodError) {
                const errmsg = error.flatten().fieldErrors;
                const firstError = Object.keys(errmsg)[0]
                const firstErrorValue = errmsg[firstError]

                return NextResponse.json(
                    { message: firstErrorValue, status: 400 }
                )
            }
        }

    } catch (error: any) {
        return NextResponse.json(
            {
                message: `Something went wrong ${error?.message}`,
                status: 500
            })
    }
}
