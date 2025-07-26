import { Order } from './order.entity';
import { Product } from './product.entity';
export declare class OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    order: Order;
    product: Product;
}
