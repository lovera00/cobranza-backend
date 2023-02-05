import { Test, TestingModule } from '@nestjs/testing';
import { Gestion } from './entities/gestion.entity';
import { GestionController } from './gestion.controller';
import { GestionService } from './gestion.service';

describe('GestionController', () => {
  let controller: GestionController;
  let service: GestionService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GestionController],
      providers: [GestionService],
    }).compile();
    controller = module.get<GestionController>(GestionController);
    service = module.get<GestionService>(GestionService);
  });
  describe('findAll', () => {
    it('should return an array of gestion', async () => {
      const result: Gestion[] = [];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      expect(await controller.findAll()).toBe(result);
    });
  });
});
