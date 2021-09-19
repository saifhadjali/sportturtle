import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrainersComponent } from './display-trainers.component';

describe('DisplayTrainersComponent', () => {
  let component: DisplayTrainersComponent;
  let fixture: ComponentFixture<DisplayTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
