import { User } from 'src/auth/entities/user.entity';
import { Deudor } from 'src/deudores/entities/deudores.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('cuentas')
export class Cuenta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  acreedor: string;

  @Column()
  concepto: string;

  @Column()
  ddm: number;

  @Column()
  ddg: number;

  @Column()
  saldoCapital: number;

  @Column()
  interesPunitorio: number;

  @Column()
  interesMoratorio: number;

  @Column()
  gastosCobranza: number;

  @Column()
  fechaUltimoPago: Date;

  @Column()
  ultimoContacto: Date;

  @Column()
  fechaProximaGestion: Date;

  @Column()
  tipoGestion: string;

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
