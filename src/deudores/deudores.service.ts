import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
import { DeudorDTO } from './dto/create-deudore.dto';
import { UpdateDeudoreDto } from './dto/update-deudore.dto';
import { Deudor } from './entities/deudore.entity';

@Injectable()
export class DeudoresService {
  private readonly logger = new Logger('DeudoresService');
  constructor(
    @InjectRepository(Deudor)
    private readonly deudorRepository: Repository<Deudor>,
  ) { }
  async create(createDeudoreDto: DeudorDTO, user: User) {
    try {
      const deudor = this.deudorRepository.create({
        ...createDeudoreDto,
        user,
      });
      return await this.deudorRepository.save(deudor);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const deudores = await this.deudorRepository.find({
      take: limit,
      skip: offset,
    });
    return deudores;
  }

  async findOne(term: string) {
    let deudor: Deudor | Deudor[]  ;
    const queryBuilder = this.deudorRepository.createQueryBuilder('deudor');
    if (!isNaN(+term)) {
      deudor = await queryBuilder.where('deudor.id = :id', { id: term }).getOne();
    } else {
      deudor = await queryBuilder.where(
        'UPPER(deudor.nombre) like UPPER(:term) OR UPPER(deudor.direccion) like UPPER(:term) OR UPPER(deudor.correo) like UPPER(:term) OR UPPER(deudor.telefono) like UPPER(:term)',
        { term: `%${term.toUpperCase()}%` }
      ).getMany();
    }
    if (!deudor) throw new NotFoundException(`Deudor with ${term} not found`);
    return deudor;
  }



  async update(id: string, updateDeudoreDto: UpdateDeudoreDto, user: User) {
    const deudor = await this.deudorRepository
      .createQueryBuilder('deudor')
      .where('deudor.id = :id', { id })
      .getOne();
    if (!deudor) throw new NotFoundException(`Deudor with ${id} not found`);
    const updatedDeudor = Object.assign(deudor, updateDeudoreDto);
    updateDeudoreDto.user = user;
    return await this.deudorRepository.save(updatedDeudor);
  }

  async remove(id: string) {
    const deudor = this.findOne(id);
    await this.deudorRepository.delete(id);
    return deudor;
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
