import { Test, TestingModule } from '@nestjs/testing';
import { TipoGestionController } from './tipo-gestion.controller';
import { TipoGestionService } from './tipo-gestion.service';

describe('TipoGestionController', () => {
  let controller: TipoGestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoGestionController],
      providers: [TipoGestionService],
    }).compile();

    controller = module.get<TipoGestionController>(TipoGestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
