import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DatoLaboralService } from './dato-laboral.service';
import { CreateDatoLaboralDto } from './dto/create-dato-laboral.dto';
import { UpdateDatoLaboralDto } from './dto/update-dato-laboral.dto';

@Controller('dato-laboral')
export class DatoLaboralController {
  constructor(private readonly datoLaboralService: DatoLaboralService) {}

  @Post()
  create(@Body() createDatoLaboralDto: CreateDatoLaboralDto) {
    return this.datoLaboralService.create(createDatoLaboralDto);
  }

  @Get()
  findAll() {
    return this.datoLaboralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datoLaboralService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDatoLaboralDto: UpdateDatoLaboralDto,
  ) {
    return this.datoLaboralService.update(+id, updateDatoLaboralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datoLaboralService.remove(+id);
  }
}
