import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedBusinessComponent } from './automated-business.component';

describe('AutomatedBusinessComponent', () => {
  let component: AutomatedBusinessComponent;
  let fixture: ComponentFixture<AutomatedBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatedBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatedBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
