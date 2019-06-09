import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVoluntaryComponent } from './register-voluntary.component';

describe('RegisterVoluntaryComponent', () => {
  let component: RegisterVoluntaryComponent;
  let fixture: ComponentFixture<RegisterVoluntaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterVoluntaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterVoluntaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
