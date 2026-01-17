import { addCartItem, isCartOpen } from '../stores/cartStore';

interface Props {
    id: string;
    name: string;
    price: string;
    image: string;
}

export default function AddToCart({ id, name, price, image }: Props) {

    function handleClick() {
        addCartItem({ id, name, priceString: price, image });
        isCartOpen.set(true); // Open cart to show confirmation
    }

    return (
        <button
            onClick={handleClick}
            className="w-full bg-bronze-500 text-navy-900 py-4 uppercase tracking-widest font-serif font-bold hover:bg-white transition-colors duration-300"
        >
            Dodaj do koszyka
        </button>
    );
}
