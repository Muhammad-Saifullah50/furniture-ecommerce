import { CartItems } from "@/app/cart/page";
import { Product } from "@/components/SellerDashboard";
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const POST = async (request: NextRequest) => {
    const result = await request.json()

    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: process.env.SHIPPING_RATE_1 },
                { shipping_rate: process.env.SHIPPING_RATE_2 }
            ],
            line_items: result.map((item: CartItems) => {
                const img = item.image;

                return {
                    price_data: {
                        currency: 'pkr',
                        product_data: {
                            name: item.name,
                            images: [img]
                        },
                        //@ts-ignore
                        unit_amount: item.price * 100
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${request.headers.get("origin")}/?success=true`,
            cancel_url: `${request.headers.get("origin")}/?canceled=true`,
        }

        // Create Checkout Sessions from body params.
        //@ts-ignore
        const session = await stripe.checkout.sessions.create(params);
        return NextResponse.json({ data: session, status: 200 })
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 400 })
    }
}


