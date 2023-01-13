import { Injectable } from '@nestjs/common';
import { CreateReferenciaPersonalDto } from './dto/create-referencia-personal.dto';
import { UpdateReferenciaPersonalDto } from './dto/update-referencia-personal.dto';

@Injectable()
export class ReferenciaPersonalService {
  create(createReferenciaPersonalDto: CreateReferenciaPersonalDto) {
    return 'This action adds a new referenciaPersonal';
  }

  findAll() {
    return `This action returns all referenciaPersonal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} referenciaPersonal`;
  }

  update(id: number, updateReferenciaPersonalDto: UpdateReferenciaPersonalDto) {
    return `This action updates a #${id} referenciaPersonal`;
  }

  remove(id: number) {
    return `This action removes a #${id} referenciaPersonal`;
  }
}
