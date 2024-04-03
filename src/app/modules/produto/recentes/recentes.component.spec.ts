import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentesComponent } from './recentes.component';

describe('RecentesComponent', () => {
  let component: RecentesComponent;
  let fixture: ComponentFixture<RecentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentesComponent]
    });
    fixture = TestBed.createComponent(RecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
