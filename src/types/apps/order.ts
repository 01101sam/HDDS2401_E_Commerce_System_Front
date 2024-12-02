enum OrderStatus {
    PENDING_PAYMENT = "pending_payment",
    PROCESSING = "processing",
    DELIVERING = "delivering",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
}

enum ShippingStatus {
    PENDING = "pending",
    PENDING_PICKUP = "pending_pickup",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
}

enum PaymentStatus {
    PENDING = "pending",
    PAID = "paid",
    EXPIRED = "expired",
    REFUNDED = "refunded",
    FAILED = "failed",
    CANCELLED = "cancelled",
}

interface OrderItem {
    product_id: string;
    quantity: number;
    review_id: string | null;
}

interface Payment {
    gateway: string;
    reference_id: string | null;
    amount: number;
    status: PaymentStatus;
}


interface PhoneNumber {
    country_code: number;
    number: string;
}

interface Address {
    id: string;
    street1: string;
    street2?: string;
    city: string;
    state: string;
    country: string;
    zip_code?: string;

    phone_number: PhoneNumber;
}

interface Shipping {
    shipping_carrier: string;
    tracking_number?: string;
    status: ShippingStatus;
}

interface User {
    id: string;
    first_name: string;
    last_name?: string;
}

export interface Order {
    id: string;
    user?: User;
    address: Address;
    items: OrderItem[];
    total_amount: number;
    payments: Payment[];
    shipping: Shipping;
    status: OrderStatus;
}