import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaTwoAreaComponent } from './cta-two-area.component';

describe('CtaTwoAreaComponent', () => {
  let component: CtaTwoAreaComponent;
  let fixture: ComponentFixture<CtaTwoAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaTwoAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaTwoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
