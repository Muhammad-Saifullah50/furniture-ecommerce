import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const POST = async (request: NextRequest) => {
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
            line_items: [
                {

                    price: '{{PRICE_ID}}',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
        }

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create(params);
        return NextResponse.redirect(session.url)
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 400 })
    }
}


