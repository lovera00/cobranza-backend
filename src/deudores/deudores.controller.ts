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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/auth/entities/user.entity';
import { ValidRoles } from 'src/auth/interfaces';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { DeudoresService } from './deudores.service';
import { DeudorDTO } from './dto/create-deudore.dto';
import { UpdateDeudoreDto } from './dto/update-deudore.dto';

@ApiTags('Deudores')
@ApiBearerAuth()
@Controller('deudores')
export class DeudoresController {
  constructor(private readonly deudoresService: DeudoresService) {}

  @Post()
  @Auth()
  create(@Body() createDeudoreDto: DeudorDTO, @GetUser() user: User) {
    return this.deudoresService.create(createDeudoreDto,user);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.deudoresService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.deudoresService.findOne(term);
  }

  @Auth()
  @Auth(ValidRoles.user)
  @Auth(ValidRoles.admin)
  @Auth(ValidRoles.superUser)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeudoreDto: UpdateDeudoreDto,@GetUser() user: User) {
    return this.deudoresService.update(id, updateDeudoreDto,user);
  }

  @Auth()
  @Auth(ValidRoles.superUser)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deudoresService.remove(id);
  }
}
