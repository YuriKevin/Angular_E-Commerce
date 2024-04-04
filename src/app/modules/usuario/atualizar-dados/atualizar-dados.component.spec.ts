import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDadosComponent } from './atualizar-dados.component';

describe('AtualizarDadosComponent', () => {
  let component: AtualizarDadosComponent;
  let fixture: ComponentFixture<AtualizarDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarDadosComponent]
    });
    fixture = TestBed.createComponent(AtualizarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
