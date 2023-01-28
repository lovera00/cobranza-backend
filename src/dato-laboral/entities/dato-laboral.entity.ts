import { User } from 'src/auth/entities/user.entity';
import { Deudor } from 'src/deudores/entities/deudores.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity('datos_laborales')
export class DatoLaboral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  empresa: string;

  @Column({ length: 255 })
  cargo: string;

  @Column({ length: 255 })
  salario: string;

  @Column({ length: 255, default: 'Activo' })
  estado: string;

  @Column({ length: 255 })
  observacion: string;

  @Column({ length: 255 })
  telefono: string;

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
