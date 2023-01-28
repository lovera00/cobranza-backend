import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReferenciaPersonalDto {

  @ApiProperty({ example: 'Juanina Pérez' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Amigo' })
  @IsNotEmpty()
  @IsString()
  relacion: string;

  @ApiProperty({ example: '0981698149' })
  @IsNotEmpty()
  @IsString()
  contacto: string;

  @ApiProperty({ example: 'Dice ser su amigo :D' })
  @IsNotEmpty()
  @IsString()
  observacion: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  deudor: number;
}
