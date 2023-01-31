import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';
export class CreateCuentaDto {
  @ApiProperty({ example: 'Empresa A' })
  @IsNotEmpty()
  @IsString()
  acreedor: string;

  @ApiProperty({ example: 'Deuda' })
  @IsNotEmpty()
  @IsString()
  concepto: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsInt()
  ddm: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsInt()
  ddg: number;

  @ApiProperty({ example: '100' })
  @IsNotEmpty()
  @IsInt()
  saldoCapital: number;

  @ApiProperty({ example: '10' })
  @IsNotEmpty()
  @IsInt()
  interesPunitorio: number;

  @ApiProperty({ example: '10' })
  @IsNotEmpty()
  @IsInt()
  interesMoratorio: number;

  @ApiProperty({ example: '10' })
  @IsNotEmpty()
  @IsInt()
  gastosCobranza: number;

  @ApiProperty({ example: '2021-01-01' })
  @IsNotEmpty()
  @IsDateString()
  fechaUltimoPago: Date;

  @ApiProperty({ example: '2021-01-01' })
  @IsNotEmpty()
  @IsDateString()
  ultimoContacto: Date;

  @ApiProperty({ example: '2021-01-01' })
  @IsNotEmpty()
  @IsDateString()
  fechaProximaGestion: Date;

  @ApiProperty({ example: 'Contacto Positivo' })
  @IsNotEmpty()
  @IsString()
  tipoGestion: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  deudor: number;
}
