import { Test, TestingModule } from '@nestjs/testing';
import { DatoLaboralService } from './dato-laboral.service';

describe('DatoLaboralService', () => {
  let service: DatoLaboralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatoLaboralService],
    }).compile();

    service = module.get<DatoLaboralService>(DatoLaboralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
