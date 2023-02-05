import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GestionService } from './gestion.service';
import { CreateGestionDto } from './dto/create-gestion.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Gestiones')
@ApiBearerAuth()
@Controller('gestion')
export class GestionController {
  constructor(private readonly gestionService: GestionService) {}

  @Post()
  @Auth()
  create(@Body() createGestionDto: CreateGestionDto, @GetUser() user: User) {
    return this.gestionService.create(createGestionDto, user);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.gestionService.findAll(paginationDto);
  }

  @Get('deudor/:idDeudor')
  findGestionByDeudor(@Param('idDeudor') idDeudor: string) {
    return this.gestionService.findGestionByDeudor(idDeudor);
  }
}
