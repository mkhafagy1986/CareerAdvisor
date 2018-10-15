import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaOneAreaComponent } from './cta-one-area.component';

describe('CtaOneAreaComponent', () => {
  let component: CtaOneAreaComponent;
  let fixture: ComponentFixture<CtaOneAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaOneAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaOneAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
