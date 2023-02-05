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
import { TipoGestionService } from './tipo-gestion.service';
import { CreateTipoGestionDto } from './dto/create-tipo-gestion.dto';
import { UpdateTipoGestionDto } from './dto/update-tipo-gestion.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Tipo de Gestiones')
@ApiBearerAuth()
@Controller('tipo-gestion')
export class TipoGestionController {
  constructor(private readonly tipoGestionService: TipoGestionService) {}

  @Post()
  @Auth()
  create(
    @Body() createTipoGestionDto: CreateTipoGestionDto,
    @GetUser() user: User,
  ) {
    return this.tipoGestionService.create(createTipoGestionDto, user);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.tipoGestionService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoGestionService.findOne(id);
  }

  @Auth()
  @Auth(ValidRoles.user)
  @Auth(ValidRoles.admin)
  @Auth(ValidRoles.superUser)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoGestionDto: UpdateTipoGestionDto,
    @GetUser() user: User,
  ) {
    return this.tipoGestionService.update(id, updateTipoGestionDto, user);
  }

  @Auth()
  @Auth(ValidRoles.superUser)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoGestionService.remove(id);
  }
}
