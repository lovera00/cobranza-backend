import { Test, TestingModule } from '@nestjs/testing';
import { TipoGestionService } from './tipo-gestion.service';

describe('TipoGestionService', () => {
  let service: TipoGestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoGestionService],
    }).compile();

    service = module.get<TipoGestionService>(TipoGestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
