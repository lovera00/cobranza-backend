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
import { CreateReferenciaPersonalDto } from './dto/create-referencia-personal.dto';
import { UpdateReferenciaPersonalDto } from './dto/update-referencia-personal.dto';
import { ReferenciaPersonal } from './entities/referencia-personal.entity';

@Injectable()
export class ReferenciaPersonalService {
  private readonly logger = new Logger('ReferenciaPersonalService');
  constructor(
    @InjectRepository(ReferenciaPersonal)
    private readonly referenciaPersonalRepository: Repository<ReferenciaPersonal>,
  ) {}
  public async create(
    createReferenciaPersonalDto: CreateReferenciaPersonalDto,
    user: User,
  ) {
    try {
      const referencia_personal = this.referenciaPersonalRepository.create({
        ...createReferenciaPersonalDto,
        user,
      });
      return await this.referenciaPersonalRepository.save(referencia_personal);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const referenciaPersonales = this.referenciaPersonalRepository.find({
      take: limit,
      skip: offset,
    });
    return referenciaPersonales;
  }

  async findByDeudor(idDeudor: string) {
    let referenciaPersonal: ReferenciaPersonal[];
    const queryBuilder = this.referenciaPersonalRepository.createQueryBuilder(
      'referencia_personal',
    );
    referenciaPersonal = await queryBuilder
      .where('referencia_personal.deudorId = :idDeudor', { idDeudor: idDeudor })
      .getMany();
    if (!referenciaPersonal)
      throw new NotFoundException(`ReferenciaPersonal with ${idDeudor} not found`);
    return referenciaPersonal;
  }

  async findOne(id: string) {
    let referenciaPersonal: ReferenciaPersonal;
    const queryBuilder = this.referenciaPersonalRepository.createQueryBuilder(
      'referencia_personal',
    );
    referenciaPersonal = await queryBuilder
      .where('referencia_personal.id = :id', { id: id })
      .getOne();
    if (!referenciaPersonal)
      throw new NotFoundException(`ReferenciaPersonal with ${id} not found`);
    return referenciaPersonal;
  }

  async update(
    id: string,
    updateReferenciaPersonalDto: UpdateReferenciaPersonalDto,
    user: User,
  ) {
    const referenciaPersonal = await this.referenciaPersonalRepository
      .createQueryBuilder('referencia_personal')
      .where('referencia_personal.id = :id', { id })
      .getOne();
    if (!referenciaPersonal)
      throw new NotFoundException(`ReferenciaPersonal with ${id} not found`);
    const updatedReferenciaPersonal = Object.assign(
      referenciaPersonal,
      updateReferenciaPersonalDto,
    );
    updateReferenciaPersonalDto.user = user;
    return await this.referenciaPersonalRepository.save(
      updatedReferenciaPersonal,
    );
  }

  async remove(id: string) {
    const referencia_personal = this.findOne(id);
    await this.referenciaPersonalRepository.delete(id);
    return referencia_personal;
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
