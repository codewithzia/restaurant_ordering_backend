import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Kitchen } from './kitchen.entity';

@Entity('kitchen_plans')
export class KitchenPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  product_limit: number;

  @Column()
  branch_limit: number;

  @Column()
  analytics_access: boolean;

  @Column()
  support_level: string;

  @OneToMany(() => Kitchen, kitchen => kitchen.plan)
  kitchens: Kitchen[];
} 