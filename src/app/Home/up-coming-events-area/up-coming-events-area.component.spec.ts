import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingEventsAreaComponent } from './up-coming-events-area.component';

describe('UpComingEventsAreaComponent', () => {
  let component: UpComingEventsAreaComponent;
  let fixture: ComponentFixture<UpComingEventsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingEventsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingEventsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
