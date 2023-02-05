import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GestionService } from './gestion.service';
import { CreateGestionDto } from './dto/create-gestion.dto';
import { UpdateGestionDto } from './dto/update-gestion.dto';

@Controller('gestion')
export class GestionController {
  constructor(private readonly gestionService: GestionService) {}

  @Post()
  create(@Body() createGestionDto: CreateGestionDto) {
    return this.gestionService.create(createGestionDto);
  }

  @Get()
  findAll() {
    return this.gestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGestionDto: UpdateGestionDto) {
    return this.gestionService.update(+id, updateGestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gestionService.remove(+id);
  }
}
