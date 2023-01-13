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

  @ManyToOne(() => Deudor, (deudor) => deudor.id)
  deudor: Deudor;
}
