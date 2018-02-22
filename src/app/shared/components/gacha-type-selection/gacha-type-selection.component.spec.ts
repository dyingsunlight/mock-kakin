import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaTypeSelectionComponent } from './gacha-type-selection.component';

describe('GachaTypeSelectionComponent', () => {
  let component: GachaTypeSelectionComponent;
  let fixture: ComponentFixture<GachaTypeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachaTypeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaTypeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
