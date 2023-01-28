import { IsNotEmpty, IsString, IsEmail, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeudorDTO {

  @ApiProperty({ example: 'Juan Roman' })
  @IsNotEmpty()
  @IsString()
  nombres: string;

  @ApiProperty({ example: 'Riquelme Gonzales' })
  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @ApiProperty({ example: 'Juan Roman , Riquelme Gonzales' })
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @ApiProperty({ example: '1234567' })
  @IsNotEmpty()
  cedula: string;

  @ApiProperty({ example: '01/01/1999' })
  @IsNotEmpty()
  @IsString()
  nacimiento: string;
}
