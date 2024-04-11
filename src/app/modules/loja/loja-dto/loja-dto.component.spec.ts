import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojaDtoComponent } from './loja-dto.component';

describe('LojaDtoComponent', () => {
  let component: LojaDtoComponent;
  let fixture: ComponentFixture<LojaDtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LojaDtoComponent]
    });
    fixture = TestBed.createComponent(LojaDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
