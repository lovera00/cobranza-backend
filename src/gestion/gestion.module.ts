import { Module } from '@nestjs/common';
import { GestionService } from './gestion.service';
import { GestionController } from './gestion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gestion } from './entities/gestion.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [GestionController],
  providers: [GestionService],
  imports: [TypeOrmModule.forFeature([Gestion]), AuthModule],
  exports: [TypeOrmModule],
})
export class GestionModule {}
