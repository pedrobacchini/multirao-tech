import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryDashboardComponent } from './voluntary-dashboard.component';

describe('VoluntaryDashboardComponent', () => {
  let component: VoluntaryDashboardComponent;
  let fixture: ComponentFixture<VoluntaryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntaryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
