import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { ValidRoles } from 'src/auth/interfaces';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { CuentasService } from './cuentas.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';

@ApiTags('Cuentas')
@ApiBearerAuth()
@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @Auth()
  @Post()
  create(@Body() createCuentaDto: CreateCuentaDto, @GetUser() user: User) {
    return this.cuentasService.create(createCuentaDto, user);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.cuentasService.findAll(paginationDto);
  }

  @Get('/buscar/:term')
  findByTerm(
    @Param('term') term: string,
    @Query() PaginationDto: PaginationDto,
  ) {
    return this.cuentasService.findByTerm(term, PaginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentasService.findOne(+id);
  }

  @Auth()
  @Auth(ValidRoles.user)
  @Auth(ValidRoles.admin)
  @Auth(ValidRoles.superUser)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCuentaDto: UpdateCuentaDto,
    @GetUser() user: User,
  ) {
    return this.cuentasService.update(+id, updateCuentaDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cuentasService.remove(+id);
  }
}
