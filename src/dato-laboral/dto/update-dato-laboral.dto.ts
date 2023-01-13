import { PartialType } from '@nestjs/swagger';
import { CreateDatoLaboralDto } from './create-dato-laboral.dto';

export class UpdateDatoLaboralDto extends PartialType(CreateDatoLaboralDto) {}
