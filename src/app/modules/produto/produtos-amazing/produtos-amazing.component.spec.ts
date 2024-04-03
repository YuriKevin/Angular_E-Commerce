import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosAmazingComponent } from './produtos-amazing.component';

describe('ProdutosAmazingComponent', () => {
  let component: ProdutosAmazingComponent;
  let fixture: ComponentFixture<ProdutosAmazingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosAmazingComponent]
    });
    fixture = TestBed.createComponent(ProdutosAmazingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
