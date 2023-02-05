import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateGestionDto {
  @ApiProperty({ example: '2021-01-01' })
  @IsNotEmpty()
  @IsDateString()
  fechaProximaGestion: Date;

  @ApiProperty({ example: 'Llamada' })
  @IsNotEmpty()
  @IsInt()
  tipoGestion: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsInt()
  deudor: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsInt()
  user: number;
}
