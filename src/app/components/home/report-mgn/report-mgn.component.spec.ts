import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMgnComponent } from './report-mgn.component';

describe('ReportMgnComponent', () => {
  let component: ReportMgnComponent;
  let fixture: ComponentFixture<ReportMgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
