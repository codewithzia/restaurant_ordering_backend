import { Kitchen } from './kitchen.entity';
import { ProductType } from './product-type.entity';
import { BranchProduct } from './branch-product.entity';
import { OrderItem } from './order-item.entity';
export declare class Product {
    id: number;
    kitchen_id: number;
    product_type_id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    created_at: Date;
    kitchen: Kitchen;
    productType: ProductType;
    branchProducts: BranchProduct[];
    orderItems: OrderItem[];
}
