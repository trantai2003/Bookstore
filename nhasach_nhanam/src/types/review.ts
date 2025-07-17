// src/types/review.ts
export interface Review {
    id: string;
    user_id: string;
    book_id: string;
    order_id: string;
    rating: number;
    title: string;
    content: string;
    helpful_count: number;
    verified_purchase: boolean;
    images: string[];
    created_at: string;
    updated_at: string;
    is_approved: boolean;
}
