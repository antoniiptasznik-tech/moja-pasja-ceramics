import { useStore } from '@nanostores/react';
import { cartItems, isCartOpen, removeCartItem } from '../stores/cartStore';

export default function CartFlyout() {
    const $cartItems = useStore(cartItems);
    const $isCartOpen = useStore(isCartOpen);

    const items = Object.values($cartItems);
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    async function handleCheckout() {
        // Call our ASTRO API endpoint
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                body: JSON.stringify({ items }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { url } = await response.json();
            if (url) {
                window.location.href = url;
            } else {
                console.error("No checkout URL returned");
            }
        } catch (e) {
            console.error(e);
        }
    }

    if (!$isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => isCartOpen.set(false)}
                className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-[90] animate-fade-in"
            ></div>

            {/* Drawer */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-navy-800 border-l border-white/10 shadow-2xl z-[100] transform transition-transform animate-slide-in-right p-8 flex flex-col">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-6">
                    <h2 className="text-2xl font-serif text-cream-100">Twój Koszyk</h2>
                    <button
                        onClick={() => isCartOpen.set(false)}
                        className="text-cream-100/50 hover:text-bronze-500 transition-colors"
                    >
                        ZAMKNIJ
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-cream-100/40 font-body text-sm uppercase tracking-widest">
                        Koszyk jest pusty
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto space-y-6">
                        {items.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-24 bg-white/5 overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-serif text-cream-100">{item.name}</h3>
                                    <p className="text-bronze-500 text-sm mt-1">{item.price} PLN</p>
                                    <div className="mt-3 flex items-center gap-4">
                                        <span className="text-cream-100/60 text-xs uppercase tracking-widest">Ilość: {item.quantity}</span>
                                        <button
                                            onClick={() => removeCartItem(item.id)}
                                            className="text-white/30 text-xs uppercase hover:text-white transition-colors"
                                        >
                                            Usuń
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="p-6 border-t border-white/10 bg-navy-900 sticky bottom-0">
                    <div className="flex justify-between items-center mb-6 text-cream-100 font-serif text-xl">
                        <span>Suma:</span>
                        <span>{total} PLN</span>
                    </div>
                    <a
                        href="/koszyk"
                        onClick={() => isCartOpen.set(false)}
                        className="block w-full text-center bg-bronze-500 text-navy-900 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300"
                    >
                        Zobacz Koszyk i Zapłać
                    </a>
                </div>
            </div>
        </>
    );
}
