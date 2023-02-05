import { User } from 'src/auth/entities/user.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { Deudor } from 'src/deudores/entities/deudores.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('tipo_gestion')
export class TipoGestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  estado: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  userDateInsert: Date;
}
