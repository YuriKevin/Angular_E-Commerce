import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificacoesComponent } from './especificacoes.component';

describe('EspecificacoesComponent', () => {
  let component: EspecificacoesComponent;
  let fixture: ComponentFixture<EspecificacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecificacoesComponent]
    });
    fixture = TestBed.createComponent(EspecificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
