import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeudoresService } from './deudores.service';
import { CreateDeudoreDto } from './dto/create-deudore.dto';
import { UpdateDeudoreDto } from './dto/update-deudore.dto';

@Controller('deudores')
export class DeudoresController {
  constructor(private readonly deudoresService: DeudoresService) {}

  @Post()
  create(@Body() createDeudoreDto: CreateDeudoreDto) {
    return this.deudoresService.create(createDeudoreDto);
  }

  @Get()
  findAll() {
    return this.deudoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deudoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeudoreDto: UpdateDeudoreDto) {
    return this.deudoresService.update(+id, updateDeudoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deudoresService.remove(+id);
  }
}
