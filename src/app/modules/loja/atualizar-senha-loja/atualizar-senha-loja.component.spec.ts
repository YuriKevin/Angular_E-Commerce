import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarSenhaLojaComponent } from './atualizar-senha-loja.component';

describe('AtualizarSenhaLojaComponent', () => {
  let component: AtualizarSenhaLojaComponent;
  let fixture: ComponentFixture<AtualizarSenhaLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarSenhaLojaComponent]
    });
    fixture = TestBed.createComponent(AtualizarSenhaLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
