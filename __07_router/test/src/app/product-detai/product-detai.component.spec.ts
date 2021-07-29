import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaiComponent } from './product-detai.component';

describe('ProductDetaiComponent', () => {
  let component: ProductDetaiComponent;
  let fixture: ComponentFixture<ProductDetaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
