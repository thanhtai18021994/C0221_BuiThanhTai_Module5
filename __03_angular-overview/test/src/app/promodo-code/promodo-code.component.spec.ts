import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromodoCodeComponent } from './promodo-code.component';

describe('PromodoCodeComponent', () => {
  let component: PromodoCodeComponent;
  let fixture: ComponentFixture<PromodoCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromodoCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromodoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
