import { Module } from '@nestjs/common';
import { DeudoresService } from './deudores.service';
import { DeudoresController } from './deudores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProductsService } from 'src/products/products.service';
import { Deudor } from './entities/deudore.entity';

@Module({
  controllers: [DeudoresController],
  providers: [DeudoresService],
  imports: [TypeOrmModule.forFeature([Deudor]), AuthModule],
})
export class DeudoresModule {}
