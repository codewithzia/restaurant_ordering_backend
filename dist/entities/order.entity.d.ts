import { Branch } from './branch.entity';
import { User } from './user.entity';
import { OrderItem } from './order-item.entity';
export declare enum OrderStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    PREPARING = "preparing",
    READY = "ready",
    COMPLETED = "completed",
    CANCELLED = "cancelled"
}
export declare class Order {
    id: number;
    branch_id: number;
    user_id: number;
    guest_name: string;
    guest_phone: string;
    table_number: number;
    status: OrderStatus;
    created_at: Date;
    branch: Branch;
    user: User;
    orderItems: OrderItem[];
}
