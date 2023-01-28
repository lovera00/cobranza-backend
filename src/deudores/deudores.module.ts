import { Module } from '@nestjs/common';
import { DeudoresService } from './deudores.service';
import { DeudoresController } from './deudores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Deudor } from './entities/deudores.entity';

@Module({
  controllers: [DeudoresController],
  providers: [DeudoresService],
  imports: [TypeOrmModule.forFeature([Deudor]), AuthModule],
  exports: [TypeOrmModule]
})
export class DeudoresModule {}
