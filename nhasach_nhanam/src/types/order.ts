// src/types/order.ts
export interface OrderItem {
    book_id: string;
    title: string;
    quantity: number;
    price: number;
    subtotal: number;
}

export interface OrderPricing {
    subtotal: number;
    shipping_fee: number;
    tax: number;
    discount: number;
    total: number;
    currency: string;
}

export interface ShippingAddress {
    recipient_name: string;
    street: string;
    ward: string;
    district: string;
    city: string;
    postal_code: string;
    phone: string;
}

export interface ShippingMethod {
    id: string;
    name: string;
    estimated_days: string;
    tracking_number: string;
}

export interface PaymentMethod {
    type: string;
    provider: string;
    last_four: string;
    transaction_id: string;
}

export interface OrderTimeline {
    status: string;
    timestamp: string;
    note: string;
}

export interface Order {
    id: string;
    order_number: string;
    user_id: string;
    status: string;
    payment_status: string;
    items: OrderItem[];
    pricing: OrderPricing;
    shipping_address: ShippingAddress;
    shipping_method: ShippingMethod;
    payment_method: PaymentMethod;
    timeline: OrderTimeline[];
    created_at: string;
    updated_at: string;
}
