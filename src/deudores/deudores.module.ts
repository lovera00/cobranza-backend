import { Module } from '@nestjs/common';
import { DeudoresService } from './deudores.service';
import { DeudoresController } from './deudores.controller';

@Module({
  controllers: [DeudoresController],
  providers: [DeudoresService]
})
export class DeudoresModule {}
