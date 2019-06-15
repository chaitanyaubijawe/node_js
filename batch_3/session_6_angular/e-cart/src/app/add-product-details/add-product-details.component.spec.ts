import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDetailsComponent } from './add-product-details.component';

describe('AddProductDetailsComponent', () => {
  let component: AddProductDetailsComponent;
  let fixture: ComponentFixture<AddProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
