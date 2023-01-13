import { Test, TestingModule } from '@nestjs/testing';
import { ReferenciaPersonalService } from './referencia-personal.service';

describe('ReferenciaPersonalService', () => {
  let service: ReferenciaPersonalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferenciaPersonalService],
    }).compile();

    service = module.get<ReferenciaPersonalService>(ReferenciaPersonalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
