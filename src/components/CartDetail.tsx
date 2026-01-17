import { useStore } from '@nanostores/react';
import { cartItems, removeCartItem } from '../stores/cartStore';

export default function CartDetail() {
    const $cartItems = useStore(cartItems);
    const items = Object.values($cartItems);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 300 ? 0 : 25; // Example logic: Free shipping over 300 PLN
    const total = subtotal + shipping;

    async function handlePayment() {
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
            }
        } catch (e) {
            console.error(e);
        }
    }

    if (items.length === 0) {
        return (
            <div className="text-center py-24">
                <h2 className="text-3xl font-serif text-cream-100 mb-6">Twój koszyk jest pusty</h2>
                <a href="/kolekcja" className="inline-block px-8 py-3 bg-bronze-500 text-navy-900 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Wróć do sklepu
                </a>
            </div>
        );
    }

    return (
        <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-8">
                <div className="border-b border-white/10 pb-4 text-cream-100/40 text-xs uppercase tracking-widest hidden md:flex justify-between">
                    <span>Produkt</span>
                    <div className="flex gap-12 pr-4">
                        <span>Ilość</span>
                        <span>Suma</span>
                    </div>
                </div>

                {items.map(item => (
                    <div key={item.id} className="flex flex-col md:flex-row gap-6 items-center bg-white/5 p-6 rounded-sm border border-white/5">
                        <div className="w-24 h-32 flex-shrink-0 bg-navy-800">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-xl font-serif text-cream-100">{item.name}</h3>
                            <p className="text-bronze-500 text-sm mt-1">{item.price} PLN</p>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex flex-col items-center">
                                <span className="text-xs text-cream-100/40 uppercase mb-1 md:hidden">Ilość</span>
                                <div className="flex items-center gap-4 bg-navy-900 px-4 py-2 rounded-full border border-white/10">
                                    <span className="text-cream-100 font-mono">{item.quantity}</span>
                                </div>
                            </div>

                            <div className="text-cream-100 font-serif text-lg w-20 text-right">
                                {item.price * item.quantity} PLN
                            </div>

                            <button
                                onClick={() => removeCartItem(item.id)}
                                className="text-white/20 hover:text-red-400 transition-colors p-2"
                                title="Usuń"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white/5 p-8 border border-white/10 sticky top-32">
                <h3 className="text-2xl font-serif text-cream-100 mb-8">Podsumowanie</h3>

                <div className="space-y-4 text-sm text-cream-100/80 font-body mb-8 border-b border-white/10 pb-8">
                    <div className="flex justify-between">
                        <span>Wartość produktów</span>
                        <span>{subtotal} PLN</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Dostawa (Kurier)</span>
                        <span>{shipping === 0 ? <span className="text-bronze-500">GRATIS</span> : `${shipping} PLN`}</span>
                    </div>
                    {shipping > 0 && (
                        <p className="text-xs text-white/30 italic mt-1 text-right">Darmowa dostawa od 300 PLN</p>
                    )}
                </div>

                <div className="flex justify-between items-end mb-8">
                    <span className="text-lg text-cream-100 font-serif">Do zapłaty</span>
                    <span className="text-3xl text-bronze-500 font-serif">{total} PLN</span>
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full bg-bronze-500 text-navy-900 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 mb-4"
                >
                    Przejdź do płatności
                </button>

                <p className="text-center text-xs text-white/30 leading-relaxed">
                    Płatności są przetwarzane bezpiecznie przez Stripe.
                    <br />Nie przechowujemy Twoich danych karty.
                </p>
            </div>
        </div>
    );
}
