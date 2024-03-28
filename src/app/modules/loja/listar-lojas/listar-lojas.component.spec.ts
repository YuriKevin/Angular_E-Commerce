import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLojasComponent } from './listar-lojas.component';

describe('ListarLojasComponent', () => {
  let component: ListarLojasComponent;
  let fixture: ComponentFixture<ListarLojasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLojasComponent]
    });
    fixture = TestBed.createComponent(ListarLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
