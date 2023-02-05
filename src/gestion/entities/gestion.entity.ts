import { User } from 'src/auth/entities/user.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { Deudor } from 'src/deudores/entities/deudores.entity';
import { TipoGestion } from 'src/tipo-gestion/entities/tipo-gestion.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('gestiones')
export class Gestion {
  //id gestion
  @PrimaryGeneratedColumn()
  id: number;

  //id deudor
  @ManyToOne(() => Deudor, (deudor) => deudor.id, {
    onDelete: 'CASCADE',
  })
  deudor: number;

  //id usuario
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  // id cuenta
  @ManyToOne(() => Cuenta, (cuenta) => cuenta.id, {
    onDelete: 'CASCADE',
  })
  cuenta: number;

  //fecha de agendamiento
  @Column()
  fechaAgendamiento: Date;

  //observacion
  @Column()
  observacion: string;

  //tipo gestion
  @ManyToOne(() => TipoGestion, (tipoGestion) => tipoGestion.id)
  tipoGestion: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  userDateInsert: Date;

  @Column({
    nullable: true,
  })
  userUpdate: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  userDateUpdate: Date;
}
