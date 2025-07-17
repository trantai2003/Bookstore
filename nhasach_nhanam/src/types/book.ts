// src/types/book.ts
export interface BookDimensions {
    width: number;
    height: number;
    thickness: number;
}

export interface BookPrice {
    original: number;
    current: number;
    currency: string;
    discount_percent: number;
}

export interface BookStock {
    quantity: number;
    status: string;
    warehouse_location: string;
}

export interface RatingDistribution {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
}

export interface BookRatings {
    average: number;
    count: number;
    distribution: RatingDistribution;
}

export interface SalesStats {
    total_sold: number;
    monthly_sold: number;
    views: number;
}

export interface BookSEO {
    slug: string;
    meta_title: string;
    meta_description: string;
}

export interface Book {
    id: string;
    isbn: string;
    title: string;
    original_title?: string;
    author: string;
    translator?: string;
    publisher: string;
    publication_date: string;
    language: string;
    pages: number;
    format: string;
    dimensions: BookDimensions;
    weight: number;
    description: string;
    cover_image: string;
    images: string[];
    categories: string[];
    tags: string[];
    price: BookPrice;
    stock: BookStock;
    ratings: BookRatings;
    sales_stats: SalesStats;
    seo: BookSEO;
    created_at: string;
    updated_at: string;
    is_active: boolean;
    is_featured: boolean;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    parent_id: string | null;
    image: string;
    subcategories: string[];
    is_active: boolean;
    sort_order: number;
}