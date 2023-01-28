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
import { DatoLaboralService } from './dato-laboral.service';
import { CreateDatoLaboralDto } from './dto/create-dato-laboral.dto';
import { UpdateDatoLaboralDto } from './dto/update-dato-laboral.dto';

@ApiTags('Datos Laborales')
@ApiBearerAuth()
@Controller('dato-laboral')
export class DatoLaboralController {
  constructor(private readonly datoLaboralService: DatoLaboralService) {}

  @Post()
  @Auth()
  create(@Body() createDatoLaboralDto: CreateDatoLaboralDto,@GetUser() user: User) {
    return this.datoLaboralService.create(createDatoLaboralDto,user);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.datoLaboralService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datoLaboralService.findOne(id);
  }

  @Get('deudor/:idDeudor')
  findByDeudor(@Param('idDeudor') idDeudor: string) {
    return this.datoLaboralService.findByDeudor(idDeudor);
  }

  @Patch(':id')
  @Auth()
  @Auth(ValidRoles.user)
  @Auth(ValidRoles.admin)
  @Auth(ValidRoles.superUser)
  update(
    @Param('id') id: string,
    @Body() updateDatoLaboralDto: UpdateDatoLaboralDto,
  ) {
    return this.datoLaboralService.update(+id, updateDatoLaboralDto);
  }

  @Delete(':id')
  @Auth()
  @Auth(ValidRoles.superUser)
  remove(@Param('id') id: string) {
    return this.datoLaboralService.remove(id);
  }
}
