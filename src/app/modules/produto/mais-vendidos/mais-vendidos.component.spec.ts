import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisVendidosComponent } from './mais-vendidos.component';

describe('MaisVendidosComponent', () => {
  let component: MaisVendidosComponent;
  let fixture: ComponentFixture<MaisVendidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaisVendidosComponent]
    });
    fixture = TestBed.createComponent(MaisVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
