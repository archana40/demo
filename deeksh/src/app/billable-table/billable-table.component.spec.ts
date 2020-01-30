import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillableTableComponent } from './billable-table.component';

describe('BillableTableComponent', () => {
  let component: BillableTableComponent;
  let fixture: ComponentFixture<BillableTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillableTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
