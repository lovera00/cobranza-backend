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
import { ReferenciaPersonalService } from './referencia-personal.service';
import { CreateReferenciaPersonalDto } from './dto/create-referencia-personal.dto';
import { UpdateReferenciaPersonalDto } from './dto/update-referencia-personal.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Referencias Personales')
@ApiBearerAuth()
@Controller('referencia-personal')
export class ReferenciaPersonalController {
  constructor(
    private readonly referenciaPersonalService: ReferenciaPersonalService,
  ) {}

  @Post()
  @Auth()
  create(
    @Body() createReferenciaPersonalDto: CreateReferenciaPersonalDto,
    @GetUser() user: User,
  ) {
    return this.referenciaPersonalService.create(
      createReferenciaPersonalDto,
      user,
    );
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.referenciaPersonalService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.referenciaPersonalService.findOne(term);
  }

  @Auth()
  @Auth(ValidRoles.user)
  @Auth(ValidRoles.admin)
  @Auth(ValidRoles.superUser)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReferenciaPersonalDto: UpdateReferenciaPersonalDto,
    @GetUser() user: User,
  ) {
    return this.referenciaPersonalService.update(
      id,
      updateReferenciaPersonalDto,
      user,
    );
  }

  @Auth()
  @Auth(ValidRoles.superUser)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.referenciaPersonalService.remove(id);
  }
}
