import { Module } from '@nestjs/common';
import { ReferenciaPersonalService } from './referencia-personal.service';
import { ReferenciaPersonalController } from './referencia-personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferenciaPersonal } from './entities/referencia-personal.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ReferenciaPersonalController],
  providers: [ReferenciaPersonalService],
  imports: [TypeOrmModule.forFeature([ReferenciaPersonal]), AuthModule],
})
export class ReferenciaPersonalModule {}
