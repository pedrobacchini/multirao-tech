import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryMenuComponent } from './voluntary-menu.component';

describe('VoluntaryMenuComponent', () => {
  let component: VoluntaryMenuComponent;
  let fixture: ComponentFixture<VoluntaryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntaryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
