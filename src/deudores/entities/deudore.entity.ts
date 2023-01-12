import { User } from 'src/auth/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('deudores')
export class Deudor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nombre: string;

  @Column({ length: 255 })
  direccion: string;

  @Column({ length: 255 })
  correo: string;

  @Column({ length: 255 })
  telefono: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  userDateInsert: Date;
}
