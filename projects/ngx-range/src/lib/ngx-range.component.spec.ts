import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRangeComponent } from './ngx-range.component';

describe('NgxRangeComponent', () => {
  let component: NgxRangeComponent;
  let fixture: ComponentFixture<NgxRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
