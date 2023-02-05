import { Injectable } from '@nestjs/common';
import { CreateGestionDto } from './dto/create-gestion.dto';
import { UpdateGestionDto } from './dto/update-gestion.dto';
import { Gestion } from './entities/gestion.entity';

@Injectable()
export class GestionService {
  create(createGestionDto: CreateGestionDto) {
    return 'This action adds a new gestion';
  }

  async findAll() : Promise<Gestion[]> {
    return [];
  }

  async findOne(id: number) {
    return `This action returns a #${id} gestion`;
  }

  async update(id: number, updateGestionDto: UpdateGestionDto) {
    return `This action updates a #${id} gestion`;
  }

  async remove(id: number) {
    return `This action removes a #${id} gestion`;
  }
}
