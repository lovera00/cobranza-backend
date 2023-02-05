import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateGestionDto {
  @ApiProperty({ example: '2021-01-01' })
  @IsNotEmpty()
  @IsDateString()
  fechaAgendamiento: Date;

  @ApiProperty({ example: 'observacion' })
  @IsNotEmpty()
  @IsString()
  observacion: string;

  @ApiProperty({ example: '1' })
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
  cuenta: number;
}
