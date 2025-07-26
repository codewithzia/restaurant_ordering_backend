import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Kitchen } from './kitchen.entity';
import { Product } from './product.entity';

@Entity('product_types')
export class ProductType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  kitchen_id: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Kitchen, kitchen => kitchen.products)
  @JoinColumn({ name: 'kitchen_id' })
  kitchen: Kitchen;

  @OneToMany(() => Product, product => product.productType)
  products: Product[];
} 