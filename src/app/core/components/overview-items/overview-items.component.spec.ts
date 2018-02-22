import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewItemsComponent } from './overview-items.component';

describe('OverviewItemsComponent', () => {
  let component: OverviewItemsComponent;
  let fixture: ComponentFixture<OverviewItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
