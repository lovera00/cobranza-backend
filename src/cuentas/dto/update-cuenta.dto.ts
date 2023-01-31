import { PartialType } from '@nestjs/swagger';
import { User } from 'src/auth/entities/user.entity';
import { CreateCuentaDto } from './create-cuenta.dto';

export class UpdateCuentaDto extends PartialType(CreateCuentaDto) {
    user: User;
}
