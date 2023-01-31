import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { Cuenta } from './entities/cuenta.entity';

@Injectable()
export class CuentasService {
  private readonly logger = new Logger('cuentasService');
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,
  ) {}
  async create(createCuentaDto: CreateCuentaDto, user: User) {
    try {
      const cuenta = this.cuentaRepository.create({
        ...createCuentaDto,
        user,
      });
      return await this.cuentaRepository.save(cuenta);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const cuentas = this.cuentaRepository.find({
      take: limit,
      skip: offset,
    });
    return cuentas;
  }

  async findOne(id: number) {
    let cuenta: Cuenta;
    const queryBuilder = this.cuentaRepository.createQueryBuilder('cuentas');
    cuenta = await queryBuilder.where('cuentas.id = :id', { id: id }).getOne();
    if (!cuenta) throw new NotFoundException(`Cuenta with ${id} not found`);
    return cuenta;
  }

  async findByTerm(term: string, paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    let cuenta: Cuenta | Cuenta[];
    const queryBuilder = this.cuentaRepository.createQueryBuilder('cuenta');
    cuenta = await queryBuilder
      .where(
        'UPPER(cuenta.acreedor) like UPPER(:term) OR UPPER(cuenta.concepto) like UPPER(:term) OR UPPER(cuenta.tipoGestion) like UPPER(:term)',
        { term: `%${term.toUpperCase()}%` },
      )
      .take(limit)
      .skip(offset)
      .getMany();
    if (!cuenta) throw new NotFoundException(`cuenta with ${term} not found`);
    return cuenta;
  }

  async update(id: number, updateCuentaDto: UpdateCuentaDto, user: User) {
    const cuenta = await this.cuentaRepository
      .createQueryBuilder('cuenta')
      .where('cuenta.id = :id', { id })
      .getOne();
    if (!cuenta) throw new NotFoundException(`Cuenta with ${id} not found`);
    const updatedCuenta = Object.assign(cuenta, updateCuentaDto);
    updateCuentaDto.user = user;
    return await this.cuentaRepository.save(updatedCuenta);
  }

  async remove(id: number) {
    const cuenta = await this.cuentaRepository
      .createQueryBuilder('cuenta')
      .where('cuenta.id = :id', { id })
      .getOne();
    if (!cuenta) throw new NotFoundException(`Cuenta with ${id} not found`);
    return await this.cuentaRepository.remove(cuenta);
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
