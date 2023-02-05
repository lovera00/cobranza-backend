import { Module } from '@nestjs/common';
import { GestionService } from './gestion.service';
import { GestionController } from './gestion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gestion } from './entities/gestion.entity';
import { TipoGestion } from './entities/tipoGestion.entity';

@Module({
  controllers: [GestionController],
  providers: [GestionService],
  imports: [TypeOrmModule.forFeature([Gestion, TipoGestion])],
  exports: [TypeOrmModule],
})
export class GestionModule {}
