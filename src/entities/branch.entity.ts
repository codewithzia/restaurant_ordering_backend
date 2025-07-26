import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Kitchen } from './kitchen.entity';
import { BranchProduct } from './branch-product.entity';
import { Order } from './order.entity';

@Entity('branches')
export class Branch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kitchen_id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  qr_code: string;

  @Column({ default: 1 })
  table_count: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Kitchen, kitchen => kitchen.branches)
  @JoinColumn({ name: 'kitchen_id' })
  kitchen: Kitchen;

  @OneToMany(() => BranchProduct, branchProduct => branchProduct.branch)
  branchProducts: BranchProduct[];

  @OneToMany(() => Order, order => order.branch)
  orders: Order[];
} 