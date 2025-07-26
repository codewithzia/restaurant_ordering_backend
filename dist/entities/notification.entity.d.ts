import { Kitchen } from './kitchen.entity';
export declare class Notification {
    id: number;
    kitchen_id: number;
    message: string;
    seen: boolean;
    created_at: Date;
    kitchen: Kitchen;
}
