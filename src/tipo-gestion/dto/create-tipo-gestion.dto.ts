import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
export class CreateTipoGestionDto {
  @ApiProperty({ example: 'Llamada' })
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty({ example: 'Activo' })
  @IsNotEmpty()
  @IsString()
  @IsEnum(['Activo', 'Inactivo'])
  status: string;
}
