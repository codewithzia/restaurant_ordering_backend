import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { KitchenPlan } from './kitchen-plan.entity';
import { Branch } from './branch.entity';
import { Product } from './product.entity';
import { Notification } from './notification.entity';

@Entity('kitchens')
export class Kitchen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ default: 10 })
  product_limit: number;

  @Column({ nullable: true })
  plan_id: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, user => user.kitchens)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => KitchenPlan, plan => plan.kitchens)
  @JoinColumn({ name: 'plan_id' })
  plan: KitchenPlan;

  @OneToMany(() => Branch, branch => branch.kitchen)
  branches: Branch[];

  @OneToMany(() => Product, product => product.kitchen)
  products: Product[];

  @OneToMany(() => Notification, notification => notification.kitchen)
  notifications: Notification[];
} 