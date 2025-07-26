import { Kitchen } from './kitchen.entity';
import { Product } from './product.entity';
export declare class ProductType {
    id: number;
    name: string;
    kitchen_id: number;
    created_at: Date;
    kitchen: Kitchen;
    products: Product[];
}
