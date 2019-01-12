import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgnComponent } from './user-mgn.component';

describe('UserMgnComponent', () => {
  let component: UserMgnComponent;
  let fixture: ComponentFixture<UserMgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
