import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewItemChipComponent } from './overview-item-chip.component';

describe('OverviewItemChipComponent', () => {
  let component: OverviewItemChipComponent;
  let fixture: ComponentFixture<OverviewItemChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewItemChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewItemChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
