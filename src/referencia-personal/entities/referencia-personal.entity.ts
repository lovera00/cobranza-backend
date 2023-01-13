import { User } from 'src/auth/entities/user.entity';
import { Deudor } from 'src/deudores/entities/deudore.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ReferenciaPersonal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  relacion: string;

  @Column()
  contacto: string;

  @Column()
  observacion: string;

  @ManyToOne(() => Deudor, (deudor) => deudor.id, {
    onDelete: 'CASCADE',
  })
  deudor: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  userDateInsert: Date;
}
