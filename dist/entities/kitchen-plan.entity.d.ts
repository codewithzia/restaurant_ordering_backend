import { Kitchen } from './kitchen.entity';
export declare class KitchenPlan {
    id: number;
    name: string;
    product_limit: number;
    branch_limit: number;
    analytics_access: boolean;
    support_level: string;
    kitchens: Kitchen[];
}
