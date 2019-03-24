import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryFormsReactiveComponent } from './enquiry-forms-reactive.component';

describe('EnquiryFormsReactiveComponent', () => {
  let component: EnquiryFormsReactiveComponent;
  let fixture: ComponentFixture<EnquiryFormsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryFormsReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryFormsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
