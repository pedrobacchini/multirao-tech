import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VonluntarioCandidaturasComponent } from './vonluntario-candidaturas.component';

describe('VonluntarioCandidaturasComponent', () => {
  let component: VonluntarioCandidaturasComponent;
  let fixture: ComponentFixture<VonluntarioCandidaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VonluntarioCandidaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VonluntarioCandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
