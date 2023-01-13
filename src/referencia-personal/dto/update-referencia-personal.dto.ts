import { PartialType } from '@nestjs/swagger';
import { User } from 'src/auth/entities/user.entity';
import { CreateReferenciaPersonalDto } from './create-referencia-personal.dto';

export class UpdateReferenciaPersonalDto extends PartialType(
  CreateReferenciaPersonalDto,
) {
  user: User;
}
