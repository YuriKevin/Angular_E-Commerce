import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarSenhaUsuarioComponent } from './atualizar-senha-usuario.component';

describe('AtualizarSenhaUsuarioComponent', () => {
  let component: AtualizarSenhaUsuarioComponent;
  let fixture: ComponentFixture<AtualizarSenhaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarSenhaUsuarioComponent]
    });
    fixture = TestBed.createComponent(AtualizarSenhaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
