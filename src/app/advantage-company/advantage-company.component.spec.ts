import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageCompanyComponent } from './advantage-company.component';

describe('AdvantageCompanyComponent', () => {
  let component: AdvantageCompanyComponent;
  let fixture: ComponentFixture<AdvantageCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantageCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantageCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
