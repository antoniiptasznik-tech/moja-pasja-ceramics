import type { APIRoute } from 'astro';
import Stripe from 'stripe';

export const POST: APIRoute = async ({ request }) => {
    const key = import.meta.env.STRIPE_SECRET_KEY;

    if (!key) {
        console.error("FATAL: STRIPE_SECRET_KEY is missing from environment variables.");
        return new Response(JSON.stringify({ error: "Configuration Error: Missing Stripe Key on server" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const stripe = new Stripe(key);

    try {
        const body = await request.json();
        const { items } = body;

        if (!items || items.length === 0) {
            return new Response(JSON.stringify({ error: "Koszyk jest pusty" }), { status: 400 });
        }

        const origin = new URL(request.url).origin;

        // Transform cart items to Stripe Line Items
        const line_items = items.map((item: any) => {
            // Ensure unit_amount is an integer and at least 1
            const amount = Math.round(Number(item.price) * 100);

            // Format image URL - Stripe requires absolute URLs
            let imageUrl = item.image;
            if (imageUrl && !imageUrl.startsWith('http')) {
                imageUrl = `${origin}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
            }

            return {
                price_data: {
                    currency: 'pln',
                    product_data: {
                        name: item.name,
                        images: imageUrl ? [imageUrl] : [],
                    },
                    unit_amount: amount,
                },
                quantity: item.quantity,
            };
        });

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${origin}/sukces?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/koszyk?canceled=true`,
            phone_number_collection: { enabled: true },
            shipping_address_collection: { allowed_countries: ['PL'] }
        });

        return new Response(JSON.stringify({ url: session.url }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error("Stripe Session Error:", error);
        return new Response(JSON.stringify({
            error: "Błąd płatności",
            details: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
