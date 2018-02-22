import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaCardIndicatorComponent } from './gacha-card-indicator.component';

describe('GachaCardIndicatorComponent', () => {
  let component: GachaCardIndicatorComponent;
  let fixture: ComponentFixture<GachaCardIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachaCardIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaCardIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
