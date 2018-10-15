import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannarAreaComponent } from './bannar-area.component';

describe('BannarAreaComponent', () => {
  let component: BannarAreaComponent;
  let fixture: ComponentFixture<BannarAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannarAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
