import { PartialType } from '@nestjs/swagger';
import { User } from 'src/auth/entities/user.entity';
import { DeudorDTO } from './create-deudore.dto';

export class UpdateDeudoreDto extends PartialType(DeudorDTO) {
  user: User;
}
