import { Test, TestingModule } from '@nestjs/testing';
import { ReferenciaPersonalController } from './referencia-personal.controller';
import { ReferenciaPersonalService } from './referencia-personal.service';

describe('ReferenciaPersonalController', () => {
  let controller: ReferenciaPersonalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenciaPersonalController],
      providers: [ReferenciaPersonalService],
    }).compile();

    controller = module.get<ReferenciaPersonalController>(
      ReferenciaPersonalController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
