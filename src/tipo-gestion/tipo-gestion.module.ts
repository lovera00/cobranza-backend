import { Module } from '@nestjs/common';
import { TipoGestionService } from './tipo-gestion.service';
import { TipoGestionController } from './tipo-gestion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoGestion } from './entities/tipo-gestion.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TipoGestionController],
  providers: [TipoGestionService],
  imports: [TypeOrmModule.forFeature([TipoGestion]), AuthModule],
  exports: [TypeOrmModule],
})
export class TipoGestionModule {}
