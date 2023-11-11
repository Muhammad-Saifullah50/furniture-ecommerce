import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
    const { data } = await req.json();
    const { amount } = data;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount),
            currency: "PKR",
        });

        return NextResponse.json({ data: paymentIntent.client_secret, status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error?.message, status: 400 });
    }
}