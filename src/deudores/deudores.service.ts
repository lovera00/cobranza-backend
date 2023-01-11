import { Injectable } from '@nestjs/common';
import { CreateDeudoreDto } from './dto/create-deudore.dto';
import { UpdateDeudoreDto } from './dto/update-deudore.dto';

@Injectable()
export class DeudoresService {
  create(createDeudoreDto: CreateDeudoreDto) {
    return 'This action adds a new deudore';
  }

  findAll() {
    return `This action returns all deudores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deudore`;
  }

  update(id: number, updateDeudoreDto: UpdateDeudoreDto) {
    return `This action updates a #${id} deudore`;
  }

  remove(id: number) {
    return `This action removes a #${id} deudore`;
  }
}
