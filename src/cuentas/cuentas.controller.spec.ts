import { Test, TestingModule } from '@nestjs/testing';
import { CreateCuentaDto } from './dto/create-cuenta.dto';

describe('CreateCuentaDto', () => {
  let dto: CreateCuentaDto;

  beforeEach(() => {
    dto = new CreateCuentaDto();
    dto.acreedor = 'Empresa A';
    dto.concepto = 'Deuda';
    dto.ddm = 1;
    dto.ddg = 1;
    dto.saldoCapital = 100;
    dto.interesPunitorio = 10;
  });

  it('should be defined', () => {
    expect(dto).toBeDefined();
  });

  it('should have acreedor property as a string and is not empty', () => {
    expect(dto.acreedor).toEqual('Empresa A');
    expect(dto.acreedor).not.toBeNull();
    expect(dto.acreedor).not.toBeUndefined();
  });

  it('should have concepto property as a string and is not empty', () => {
    expect(dto.concepto).toEqual('Deuda');
    expect(dto.concepto).not.toBeNull();
    expect(dto.concepto).not.toBeUndefined();
  });

  it('should have ddm property as an integer and is not empty', () => {
    expect(dto.ddm).toEqual(1);
    expect(dto.ddm).not.toBeNull();
    expect(dto.ddm).not.toBeUndefined();
  });

  it('should have ddg property as an integer and is not empty', () => {
    expect(dto.ddg).toEqual(1);
    expect(dto.ddg).not.toBeNull();
    expect(dto.ddg).not.toBeUndefined();
  });

  it('should have saldoCapital property as an integer and is not empty', () => {
    expect(dto.saldoCapital).toEqual(100);
    expect(dto.saldoCapital).not.toBeNull();
    expect(dto.saldoCapital).not.toBeUndefined();
  });

  it('should have interesPunitorio property as an integer and is not empty', () => {
    expect(dto.interesPunitorio).toEqual(10);
    expect(dto.interesPunitorio).not.toBeNull();
    expect(dto.interesPunitorio).not.toBeUndefined();
  });
});
