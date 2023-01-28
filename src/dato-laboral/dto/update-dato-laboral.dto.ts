import { PartialType } from '@nestjs/swagger';
import { User } from 'src/auth/entities/user.entity';
import { CreateDatoLaboralDto } from './create-dato-laboral.dto';

export class UpdateDatoLaboralDto extends PartialType(CreateDatoLaboralDto) {
    user: User;
}
