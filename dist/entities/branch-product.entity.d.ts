import { Branch } from './branch.entity';
import { Product } from './product.entity';
export declare class BranchProduct {
    id: number;
    branch_id: number;
    product_id: number;
    branch: Branch;
    product: Product;
}
