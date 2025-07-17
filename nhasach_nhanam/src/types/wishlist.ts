// src/types/wishlist.ts
export interface WishlistBook {
    book_id: string;
    added_at: string;
    priority: string;
}

export interface Wishlist {
    id: string;
    user_id: string;
    name: string;
    description: string;
    books: WishlistBook[];
    is_public: boolean;
    created_at: string;
    updated_at: string;
}