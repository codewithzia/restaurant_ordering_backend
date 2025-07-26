import { Kitchen } from './kitchen.entity';
import { BranchProduct } from './branch-product.entity';
import { Order } from './order.entity';
export declare class Branch {
    id: number;
    kitchen_id: number;
    name: string;
    location: string;
    qr_code: string;
    table_count: number;
    created_at: Date;
    kitchen: Kitchen;
    branchProducts: BranchProduct[];
    orders: Order[];
}
