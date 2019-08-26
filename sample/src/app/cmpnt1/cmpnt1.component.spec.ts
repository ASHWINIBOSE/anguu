import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmpnt1Component } from './cmpnt1.component';

describe('Cmpnt1Component', () => {
  let component: Cmpnt1Component;
  let fixture: ComponentFixture<Cmpnt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmpnt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmpnt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
