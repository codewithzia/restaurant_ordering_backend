import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Kitchen } from './kitchen.entity';
import { Order } from './order.entity';

export enum UserRole {
  ADMIN = 'admin',
  KITCHEN = 'kitchen',
  USER = 'user',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phone: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Kitchen, kitchen => kitchen.user)
  kitchens: Kitchen[];

  @OneToMany(() => Order, order => order.user)
  orders: Order[];
} 