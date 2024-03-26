import { TestBed } from '@angular/core/testing';

import { ProdutoCompradoService } from './produto-comprado.service';

describe('ProdutoCompradoService', () => {
  let service: ProdutoCompradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoCompradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
