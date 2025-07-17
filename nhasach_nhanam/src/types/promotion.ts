// src/types/promotion.ts
export interface Promotion {
    id: string;
    code: string;
    title: string;
    description: string;
    type: string;
    value: number;
    min_order_amount: number;
    max_discount_amount: number;
    usage_limit: number;
    used_count: number;
    applicable_categories: string[];
    applicable_books: string[];
    start_date: string;
    end_date: string;
    is_active: boolean;
}