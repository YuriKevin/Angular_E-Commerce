import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoComponent } from './secao.component';

describe('SecaoComponent', () => {
  let component: SecaoComponent;
  let fixture: ComponentFixture<SecaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecaoComponent]
    });
    fixture = TestBed.createComponent(SecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
