import { User } from './user.entity';
import { KitchenPlan } from './kitchen-plan.entity';
import { Branch } from './branch.entity';
import { Product } from './product.entity';
import { Notification } from './notification.entity';
export declare class Kitchen {
    id: number;
    user_id: number;
    name: string;
    logo: string;
    product_limit: number;
    plan_id: number;
    created_at: Date;
    user: User;
    plan: KitchenPlan;
    branches: Branch[];
    products: Product[];
    notifications: Notification[];
}
