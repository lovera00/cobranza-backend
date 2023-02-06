import { Injectable } from '@nestjs/common';
import { CreateGestionDto } from './dto/create-gestion.dto';
import { Gestion } from './entities/gestion.entity';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
@Injectable()
export class GestionService {
  private readonly logger = new Logger('GestionService');
  constructor(
    @InjectRepository(Gestion)
    private readonly gestionRepository: Repository<Gestion>,
  ) {}

  async create(createGestionDto: CreateGestionDto, user: User) {
    try {
      const gestion = this.gestionRepository.create({
        ...createGestionDto,
        user,
      });
      return await this.gestionRepository.save(gestion);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<Gestion[]> {
    const { limit = 10, offset = 0 } = paginationDto;
    const gestiones = this.gestionRepository.find({
      take: limit,
      skip: offset,
    });
    return gestiones;
  }

  async findGestionByDeudor(id: string) {
    const gestiones = this.gestionRepository.find({
      where: { deudor: +id },
    });
    return gestiones;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    // console.log(error)
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
