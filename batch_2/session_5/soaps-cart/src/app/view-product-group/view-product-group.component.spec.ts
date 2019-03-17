import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductGroupComponent } from './view-product-group.component';

describe('ViewProductGroupComponent', () => {
  let component: ViewProductGroupComponent;
  let fixture: ComponentFixture<ViewProductGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
