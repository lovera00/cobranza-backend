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
import { CreateDatoLaboralDto } from './dto/create-dato-laboral.dto';
import { UpdateDatoLaboralDto } from './dto/update-dato-laboral.dto';
import { DatoLaboral } from './entities/dato-laboral.entity';

@Injectable()
export class DatoLaboralService {
  private readonly logger = new Logger('ReferenciaPersonalService');
  constructor(
    @InjectRepository(DatoLaboral)
    private readonly datosLaboralesRepository: Repository<DatoLaboral>,
  ) {}

  async create(createDatoLaboralDto: CreateDatoLaboralDto, user: User) {
    try {
      const datoLaboral = this.datosLaboralesRepository.create({
        ...createDatoLaboralDto,
        user,
      });
      return await this.datosLaboralesRepository.save(datoLaboral);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const datosLaborales = await this.datosLaboralesRepository.find({
      take: limit,
      skip: offset,
    });
    return datosLaborales;
  }

  async findByDeudor(idDeudor: string) {
    let datoLaboral: DatoLaboral[];
    const queryBuilder = this.datosLaboralesRepository.createQueryBuilder(
      'dato_laboral',
    );
    datoLaboral = await queryBuilder
      .where('dato_laboral.deudorId = :idDeudor', { idDeudor: idDeudor })
      .getMany();
    if (!datoLaboral)
      throw new NotFoundException(`DatoLaboral with ${idDeudor} not found`);
    return datoLaboral;
  }

  async findOne(id: string) {
    let datoLaboral:DatoLaboral;
    const queryBuilder = this.datosLaboralesRepository.createQueryBuilder(
      'dato_laboral',
    );
    datoLaboral = await queryBuilder
      .where('dato_laboral.id = :id', { id: id })
      .getOne();
    if (!datoLaboral)
      throw new NotFoundException(`DatoLaboral with ${id} not found`);
    return datoLaboral;
  }

  async update(id: number, updateDatoLaboralDto: UpdateDatoLaboralDto) {
    const datoLaboral = await this.datosLaboralesRepository.preload({
      id,
      ...updateDatoLaboralDto,
    });
    if (!datoLaboral)
      throw new NotFoundException(`DatoLaboral with ${id} not found`);
    return await this.datosLaboralesRepository.save(datoLaboral);
  }

  async remove(id: string) {
    const dato_laboral = this.findOne(id)
    if (!dato_laboral)
      throw new NotFoundException(`DatoLaboral with ${id} not found`);
    return await this.datosLaboralesRepository.delete(id);
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
