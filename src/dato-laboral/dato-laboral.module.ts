import { Module } from '@nestjs/common';
import { DatoLaboralService } from './dato-laboral.service';
import { DatoLaboralController } from './dato-laboral.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatoLaboral } from './entities/dato-laboral.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DatoLaboralController],
  providers: [DatoLaboralService],
  imports: [TypeOrmModule.forFeature([DatoLaboral]), AuthModule],
  exports: [TypeOrmModule],
})
export class DatoLaboralModule {}
