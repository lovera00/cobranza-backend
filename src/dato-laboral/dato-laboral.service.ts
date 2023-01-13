import { Injectable } from '@nestjs/common';
import { CreateDatoLaboralDto } from './dto/create-dato-laboral.dto';
import { UpdateDatoLaboralDto } from './dto/update-dato-laboral.dto';

@Injectable()
export class DatoLaboralService {
  create(createDatoLaboralDto: CreateDatoLaboralDto) {
    return 'This action adds a new datoLaboral';
  }

  findAll() {
    return `This action returns all datoLaboral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datoLaboral`;
  }

  update(id: number, updateDatoLaboralDto: UpdateDatoLaboralDto) {
    return `This action updates a #${id} datoLaboral`;
  }

  remove(id: number) {
    return `This action removes a #${id} datoLaboral`;
  }
}
