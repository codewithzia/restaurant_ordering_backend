import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Kitchen } from './kitchen.entity';
import { ProductType } from './product-type.entity';
import { BranchProduct } from './branch-product.entity';
import { OrderItem } from './order-item.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kitchen_id: number;

  @Column()
  product_type_id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Kitchen, kitchen => kitchen.products)
  @JoinColumn({ name: 'kitchen_id' })
  kitchen: Kitchen;

  @ManyToOne(() => ProductType, productType => productType.products)
  @JoinColumn({ name: 'product_type_id' })
  productType: ProductType;

  @OneToMany(() => BranchProduct, branchProduct => branchProduct.product)
  branchProducts: BranchProduct[];

  @OneToMany(() => OrderItem, orderItem => orderItem.product)
  orderItems: OrderItem[];
} 