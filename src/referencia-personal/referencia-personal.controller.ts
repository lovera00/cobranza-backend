import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReferenciaPersonalService } from './referencia-personal.service';
import { CreateReferenciaPersonalDto } from './dto/create-referencia-personal.dto';
import { UpdateReferenciaPersonalDto } from './dto/update-referencia-personal.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Referencias Personales')
@ApiBearerAuth()
@Controller('referencia-personal')
export class ReferenciaPersonalController {
  constructor(
    private readonly referenciaPersonalService: ReferenciaPersonalService,
  ) {}

  @Post()
  create(@Body() createReferenciaPersonalDto: CreateReferenciaPersonalDto) {
    return this.referenciaPersonalService.create(createReferenciaPersonalDto);
  }

  @Get()
  findAll() {
    return this.referenciaPersonalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.referenciaPersonalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReferenciaPersonalDto: UpdateReferenciaPersonalDto,
  ) {
    return this.referenciaPersonalService.update(
      +id,
      updateReferenciaPersonalDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.referenciaPersonalService.remove(+id);
  }
}
