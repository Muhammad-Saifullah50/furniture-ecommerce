import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
    const data = await request.json()

    console.log(data)
}