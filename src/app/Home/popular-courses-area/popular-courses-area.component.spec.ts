import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCoursesAreaComponent } from './popular-courses-area.component';

describe('PopularCoursesAreaComponent', () => {
  let component: PopularCoursesAreaComponent;
  let fixture: ComponentFixture<PopularCoursesAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCoursesAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCoursesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
