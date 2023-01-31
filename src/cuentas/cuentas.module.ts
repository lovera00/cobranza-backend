import { Module } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CuentasController } from './cuentas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CuentasController],
  providers: [CuentasService],
  imports: [TypeOrmModule.forFeature([Cuenta]), AuthModule],
})
export class CuentasModule {}
