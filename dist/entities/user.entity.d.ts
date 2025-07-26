import { Kitchen } from './kitchen.entity';
import { Order } from './order.entity';
export declare enum UserRole {
    ADMIN = "admin",
    KITCHEN = "kitchen",
    USER = "user"
}
export declare class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    role: UserRole;
    created_at: Date;
    kitchens: Kitchen[];
    orders: Order[];
}
