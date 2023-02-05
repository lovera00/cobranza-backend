import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
import { CreateTipoGestionDto } from './dto/create-tipo-gestion.dto';
import { UpdateTipoGestionDto } from './dto/update-tipo-gestion.dto';
import { TipoGestion } from './entities/tipo-gestion.entity';

@Injectable()
export class TipoGestionService {
  private readonly logger = new Logger('TipoGestionService');
  constructor(
    @InjectRepository(TipoGestion)
    private readonly tipoGestionRepository: Repository<TipoGestion>,
  ) {}

  async create(createTipoGestionDto: CreateTipoGestionDto, user: User) {
    try {
      const tipo_gestion = this.tipoGestionRepository.create({
        ...createTipoGestionDto,
        user,
      });
      return await this.tipoGestionRepository.save(tipo_gestion);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const tipoGestiones = this.tipoGestionRepository.find({
      take: limit,
      skip: offset,
    });
    return tipoGestiones;
  }

  async findOne(id: string) {
    let tipoGestion: TipoGestion;
    const queryBuilder =
      this.tipoGestionRepository.createQueryBuilder('tipo_gestion');
    tipoGestion = await queryBuilder
      .where('tipo_gestion.id = :id', { id: id })
      .getOne();
    if (!tipoGestion)
      throw new NotFoundException(`TipoGestion with ${id} not found`);
    return tipoGestion;
  }

  async update(
    id: string,
    updateTipoGestionDto: UpdateTipoGestionDto,
    user: User,
  ) {
    let tipoGestion: TipoGestion;
    const queryBuilder =
      this.tipoGestionRepository.createQueryBuilder('tipo_gestion');
    tipoGestion = await queryBuilder
      .where('tipo_gestion.id = :id', { id: id })
      .getOne();
    if (!tipoGestion)
      throw new NotFoundException(`TipoGestion with ${id} not found`);
    try {
      const tipo_gestion = this.tipoGestionRepository.create({
        ...tipoGestion,
        ...updateTipoGestionDto,
        userUpd: user,
      });
      return await this.tipoGestionRepository.save(tipo_gestion);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    let tipoGestion: TipoGestion;
    const queryBuilder =
      this.tipoGestionRepository.createQueryBuilder('tipo_gestion');
    tipoGestion = await queryBuilder
      .where('tipo_gestion.id = :id', { id: id })
      .getOne();
    if (!tipoGestion)
      throw new NotFoundException(`TipoGestion with ${id} not found`);
    try {
      return await this.tipoGestionRepository.remove(tipoGestion);
    } catch (error) {
      this.handleDBExceptions(error);
    }
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
