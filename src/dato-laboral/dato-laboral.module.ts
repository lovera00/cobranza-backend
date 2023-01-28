import { Module } from '@nestjs/common';
import { DatoLaboralService } from './dato-laboral.service';
import { DatoLaboralController } from './dato-laboral.controller';

@Module({
  controllers: [DatoLaboralController],
  providers: [DatoLaboralService],
})
export class DatoLaboralModule {}
