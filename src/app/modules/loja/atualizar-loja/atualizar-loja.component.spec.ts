import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarLojaComponent } from './atualizar-loja.component';

describe('AtualizarLojaComponent', () => {
  let component: AtualizarLojaComponent;
  let fixture: ComponentFixture<AtualizarLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarLojaComponent]
    });
    fixture = TestBed.createComponent(AtualizarLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
