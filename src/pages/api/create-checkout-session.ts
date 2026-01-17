import type { APIRoute } from 'astro';
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export const POST: APIRoute = async ({ request }) => {
    if (!import.meta.env.STRIPE_SECRET_KEY) {
        return new Response(JSON.stringify({ error: "Missing Stripe Key" }), { status: 500 });
    }

    try {
        const body = await request.json();
        const { items } = body;

        if (!items || items.length === 0) {
            return new Response(JSON.stringify({ error: "Cart is empty" }), { status: 400 });
        }

        // Transform cart items to Stripe Line Items
        const line_items = items.map((item: any) => ({
            price_data: {
                currency: 'pln',
                product_data: {
                    name: item.name,
                    images: [new URL(item.image, 'https://moja-pasja-ceramics.demo').toString()], // Use absolute URL if in prod, logic needed here
                },
                unit_amount: item.price * 100, // PLN to Groszy
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${new URL(request.url).origin}/sukces?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${new URL(request.url).origin}/?canceled=true`,
            phone_number_collection: {
                enabled: true
            },
            shipping_address_collection: {
                allowed_countries: ['PL']
            }
        });

        return new Response(JSON.stringify({ url: session.url }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
