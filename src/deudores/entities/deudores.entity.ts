import { User } from 'src/auth/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('deudores')
export class Deudor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombres: string;

  @Column({ length: 255 })
  apellidos: string;

  @Column({ length: 255 })
  fullname: string;

  @Column({ length: 255 })
  cedula: string;
  
  @Column({ length: 255 })
  nacimiento: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  userDateInsert: Date;
}
