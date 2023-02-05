import { User } from 'src/auth/entities/user.entity';
import { Deudor } from 'src/deudores/entities/deudores.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('tipo_gestion')
export class TipoGestion {
  //id description status userIns fchIns userUpd fchUpd

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ['Activo', 'Inactivo'],
    default: 'Activo',
  })
  status: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fchIns: Date;

  @ManyToOne(() => User, (user) => user.id)
  userUpd: User;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fchUpd: Date;
}
