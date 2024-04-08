import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarProdutoComponent } from './atualizar-produto.component';

describe('AtualizarProdutoComponent', () => {
  let component: AtualizarProdutoComponent;
  let fixture: ComponentFixture<AtualizarProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarProdutoComponent]
    });
    fixture = TestBed.createComponent(AtualizarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
