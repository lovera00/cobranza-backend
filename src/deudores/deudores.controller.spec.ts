import { Test, TestingModule } from '@nestjs/testing';
import { DeudoresController } from './deudores.controller';
import { DeudoresService } from './deudores.service';

describe('DeudoresController', () => {
  let controller: DeudoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeudoresController],
      providers: [DeudoresService],
    }).compile();

    controller = module.get<DeudoresController>(DeudoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
