import { Test, TestingModule } from '@nestjs/testing';
import { DatoLaboralController } from './dato-laboral.controller';
import { DatoLaboralService } from './dato-laboral.service';

describe('DatoLaboralController', () => {
  let controller: DatoLaboralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatoLaboralController],
      providers: [DatoLaboralService],
    }).compile();

    controller = module.get<DatoLaboralController>(DatoLaboralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
