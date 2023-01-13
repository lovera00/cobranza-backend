import { PartialType } from '@nestjs/swagger';
import { CreateReferenciaPersonalDto } from './create-referencia-personal.dto';

export class UpdateReferenciaPersonalDto extends PartialType(
  CreateReferenciaPersonalDto,
) {}
