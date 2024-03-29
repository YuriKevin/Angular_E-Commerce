import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCategoriaComponent } from './adicionar-categoria.component';

describe('AdicionarCategoriaComponent', () => {
  let component: AdicionarCategoriaComponent;
  let fixture: ComponentFixture<AdicionarCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarCategoriaComponent]
    });
    fixture = TestBed.createComponent(AdicionarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
