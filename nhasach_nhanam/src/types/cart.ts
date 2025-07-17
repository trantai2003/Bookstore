// src/types/cart.ts
export interface CartItem {
    book_id: string;
    quantity: number;
    price: number;
    added_at: string;
}

export interface ShoppingCart {
    id: string;
    user_id: string;
    items: CartItem[];
    total_items: number;
    subtotal: number;
    created_at: string;
    updated_at: string;
}