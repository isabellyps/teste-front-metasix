import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BvHeaderComponent } from './bv-header.component';

describe('BvHeaderComponent', () => {
  let component: BvHeaderComponent;
  let fixture: ComponentFixture<BvHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BvHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
