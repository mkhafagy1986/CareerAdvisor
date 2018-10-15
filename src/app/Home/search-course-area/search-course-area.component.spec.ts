import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseAreaComponent } from './search-course-area.component';

describe('SearchCourseAreaComponent', () => {
  let component: SearchCourseAreaComponent;
  let fixture: ComponentFixture<SearchCourseAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCourseAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
