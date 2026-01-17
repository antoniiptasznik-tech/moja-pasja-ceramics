import { useEffect } from 'react';
import { cartItems } from '../stores/cartStore';

export default function OrderSuccess() {
    useEffect(() => {
        // Clear the cart on successful order
        cartItems.set({});
    }, []);

    return (
        <div className="text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full border border-bronze-500/30 flex items-center justify-center bg-bronze-500/10">
                    <svg className="w-12 h-12 text-bronze-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-cream-100 italic">Dziękuję.</h1>
            <p className="text-xl text-cream-100/80 font-light max-w-lg mx-auto">
                Twoje zamówienie zostało przyjęte. To dla mnie zaszczyt, że moja ceramika znajdzie miejsce w Twoim domu.
            </p>

            <div className="py-12 grid md:grid-cols-3 gap-8 text-center border-t border-b border-white/5 my-12">
                <div className="space-y-2">
                    <div className="text-xs uppercase tracking-widest text-bronze-500">Krok 1</div>
                    <h3 className="text-cream-100 font-serif text-lg">Potwierdzenie</h3>
                    <p className="text-xs text-white/40">Otrzymasz e-mail ze szczegółami zamówienia.</p>
                </div>
                <div className="space-y-2">
                    <div className="text-xs uppercase tracking-widest text-bronze-500">Krok 2</div>
                    <h3 className="text-cream-100 font-serif text-lg">Puccia w podróży</h3>
                    <p className="text-xs text-white/40">Starannie pakuję każdą sztukę, by dotarła bezpiecznie.</p>
                </div>
                <div className="space-y-2">
                    <div className="text-xs uppercase tracking-widest text-bronze-500">Krok 3</div>
                    <h3 className="text-cream-100 font-serif text-lg">Doręczenie</h3>
                    <p className="text-xs text-white/40">Kurier dostarczy przesyłkę w ciągu 2-3 dni.</p>
                </div>
            </div>

            <a
                href="/"
                className="inline-block px-12 py-4 bg-white/5 hover:bg-bronze-500 text-cream-100 hover:text-navy-900 border border-white/10 hover:border-bronze-500 transition-all duration-500 uppercase tracking-widest text-xs font-bold"
            >
                Wróć na stronę główną
            </a>
        </div>
    );
}
