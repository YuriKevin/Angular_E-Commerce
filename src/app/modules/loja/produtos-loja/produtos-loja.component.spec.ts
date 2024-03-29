import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosLojaComponent } from './produtos-loja.component';

describe('ProdutosLojaComponent', () => {
  let component: ProdutosLojaComponent;
  let fixture: ComponentFixture<ProdutosLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosLojaComponent]
    });
    fixture = TestBed.createComponent(ProdutosLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
