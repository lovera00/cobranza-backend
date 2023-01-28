import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateDatoLaboralDto {
  @ApiProperty({ example: 'Soluciones S.A.' })
  @IsNotEmpty()
  @IsString()
  empresa: string;

  @ApiProperty({ example: 'Programador' })
  @IsNotEmpty()
  @IsString()
  cargo: string;

  @ApiProperty({ example: 'NO DISPONIBLE' })
  @IsNotEmpty()
  @IsString()
  salario: string;

  @ApiProperty({ example: 'Activo' })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({ example: 'Trabaja en esta empesa desde hace 2 años VER IPS' })
  @IsString()
  observacion: string;

  @ApiProperty({ example: '0981698149' })
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  deudor: number;
}
