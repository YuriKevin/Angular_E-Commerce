import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilLojaComponent } from './perfil-loja.component';

describe('PerfilLojaComponent', () => {
  let component: PerfilLojaComponent;
  let fixture: ComponentFixture<PerfilLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilLojaComponent]
    });
    fixture = TestBed.createComponent(PerfilLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
