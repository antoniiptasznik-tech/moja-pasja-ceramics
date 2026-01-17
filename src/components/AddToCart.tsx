import { addCartItem, isCartOpen } from '../stores/cartStore';

interface Props {
    id: string;
    name: string;
    price: string;
    image: string;
    isAvailable?: boolean;
}

export default function AddToCart({ id, name, price, image, isAvailable = true }: Props) {

    function handleClick() {
        if (!isAvailable) return;
        addCartItem({ id, name, priceString: price, image });
        isCartOpen.set(true); // Open cart to show confirmation
    }

    return (
        <button
            onClick={handleClick}
            disabled={!isAvailable}
            className={`w-full py-4 uppercase tracking-widest font-serif font-bold transition-all duration-300 ${isAvailable
                    ? "bg-bronze-500 text-navy-900 hover:bg-white"
                    : "bg-white/10 text-white/30 cursor-not-allowed border border-white/10"
                }`}
        >
            {isAvailable ? "Dodaj do koszyka" : "Produkt Wyprzedany"}
        </button>
    );
}
