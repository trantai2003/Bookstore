// src/types/common.ts - Utility types
export type BookStatus = 'in_stock' | 'out_of_stock' | 'pre_order';
export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type UserRole = 'customer' | 'admin' | 'staff';
export type BookFormat = 'paperback' | 'hardcover' | 'ebook' | 'audiobook';
export type NotificationType = 'order_status' | 'promotion' | 'newsletter' | 'system';
export type PromotionType = 'percentage' | 'fixed_amount' | 'free_shipping';
export type SortOrder = 'asc' | 'desc';
export type SortBy = 'relevance' | 'price' | 'rating' | 'publication_date' | 'popularity';