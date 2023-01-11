import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDateString,
  IsInt,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeudorDTO {
  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  id: number;

  @ApiProperty({ example: 'Juan Pérez' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Calle Falsa 123' })
  @IsNotEmpty()
  @IsString()
  direccion: string;

  @ApiProperty({ example: 'juanperez@example.com' })
  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @ApiProperty({ example: '555-555-555' })
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  idusuariocreacion: number;

  @ApiProperty({ example: '2020-01-01' })
  @IsNotEmpty()
  @IsDateString()
  fechacreacion: string;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  idusuariomodificacion: number;

  @ApiProperty({ example: '2020-02-01' })
  @IsNotEmpty()
  @IsDateString()
  fechamodificacion: string;
}
