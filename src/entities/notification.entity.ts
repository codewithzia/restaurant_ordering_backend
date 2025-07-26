import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Kitchen } from './kitchen.entity';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kitchen_id: number;

  @Column()
  message: string;

  @Column({ default: false })
  seen: boolean;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Kitchen, kitchen => kitchen.notifications)
  @JoinColumn({ name: 'kitchen_id' })
  kitchen: Kitchen;
} 