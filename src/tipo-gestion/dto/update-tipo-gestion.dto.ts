import { PartialType } from '@nestjs/swagger';
import { User } from 'src/auth/entities/user.entity';
import { CreateTipoGestionDto } from './create-tipo-gestion.dto';

export class UpdateTipoGestionDto extends PartialType(CreateTipoGestionDto) {
  user: User;
}
