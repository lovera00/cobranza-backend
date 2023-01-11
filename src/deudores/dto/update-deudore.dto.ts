import { PartialType } from '@nestjs/swagger';
import { CreateDeudoreDto } from './create-deudore.dto';

export class UpdateDeudoreDto extends PartialType(CreateDeudoreDto) {}
