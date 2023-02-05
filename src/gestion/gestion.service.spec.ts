import { GestionService } from './gestion.service';

describe('GestionService', () => {
  let gestionService: GestionService;

  beforeEach(() => {
    gestionService = new GestionService();
  });

  describe('create', () => {
    it('should return a message', () => {
      const createGestionDto = {
        fechaProximaGestion: new Date(),
        tipoGestion: 1,
        deudor: 1,
        user: 1,
      };
      const result = gestionService.create(createGestionDto);
      expect(result).toEqual('This action adds a new gestion');
    });
  });

  describe('findAll', () => {
    it('should return an empty array', async () => {
      const result = await gestionService.findAll();
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should return a gestion', async () => {
      const result = await gestionService.findOne(1);
      expect(result).toEqual('This action returns a #1 gestion');
    });
  });

  describe('update', () => {
    it('should return a message', async () => {
      const updateGestionDto = {};
      const result = await gestionService.update(1, updateGestionDto);
      expect(result).toEqual('This action updates a #1 gestion');
    });
  });

  describe('remove', () => {
    it('should return a message', async () => {
      const result = await gestionService.remove(1);
      expect(result).toEqual('This action removes a #1 gestion');
    });
  });
});
