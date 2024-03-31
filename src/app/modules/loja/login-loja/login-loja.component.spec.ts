import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLojaComponent } from './login-loja.component';

describe('LoginLojaComponent', () => {
  let component: LoginLojaComponent;
  let fixture: ComponentFixture<LoginLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLojaComponent]
    });
    fixture = TestBed.createComponent(LoginLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
