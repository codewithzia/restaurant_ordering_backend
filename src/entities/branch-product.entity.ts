import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Branch } from './branch.entity';
import { Product } from './product.entity';

@Entity('branch_products')
export class BranchProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branch_id: number;

  @Column()
  product_id: number;

  @ManyToOne(() => Branch, branch => branch.branchProducts)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @ManyToOne(() => Product, product => product.branchProducts)
  @JoinColumn({ name: 'product_id' })
  product: Product;
} 