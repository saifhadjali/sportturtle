import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CousesSpecialComponent } from './couses-special.component';

describe('CousesSpecialComponent', () => {
  let component: CousesSpecialComponent;
  let fixture: ComponentFixture<CousesSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CousesSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CousesSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
