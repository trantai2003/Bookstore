// src/types/notification.ts
export interface NotificationData {
    order_id?: string;
    promotion_code?: string;
    discount_percent?: number;
}

export interface Notification {
    id: string;
    user_id: string;
    type: string;
    title: string;
    message: string;
    data: NotificationData;
    is_read: boolean;
    created_at: string;
}