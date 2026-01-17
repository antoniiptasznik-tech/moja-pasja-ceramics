import { atom, map } from 'nanostores';

export interface CartItem {
    id: string;
    name: string;
    price: number; // Stored as number (e.g., 180) to allow math
    image: string;
    quantity: number;
}

// Persistent cart map
export const cartItems = map<Record<string, CartItem>>({});

// Actions
export function addCartItem({ id, name, priceString, image }: { id: string, name: string, priceString: string, image: string }) {
    const existingEntry = cartItems.get()[id];

    // Parse "180 PLN" to 180
    const price = parseInt(priceString.replace(/\D/g, ''), 10);

    if (existingEntry) {
        cartItems.setKey(id, {
            ...existingEntry,
            quantity: existingEntry.quantity + 1,
        });
    } else {
        cartItems.setKey(id, {
            id,
            name,
            price,
            image,
            quantity: 1,
        });
    }
}

export function removeCartItem(id: string) {
    const existing = cartItems.get()[id];
    if (existing && existing.quantity > 1) {
        cartItems.setKey(id, {
            ...existing,
            quantity: existing.quantity - 1
        })
    } else {
        // Remove completely
        const newItems = { ...cartItems.get() };
        delete newItems[id];
        cartItems.set(newItems);
    }
}

// UI State for Flyout
export const isCartOpen = atom(false);
