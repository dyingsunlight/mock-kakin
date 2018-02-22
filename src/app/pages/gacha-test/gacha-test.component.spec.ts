import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaTestComponent } from './gacha-test.component';

describe('GachaTestComponent', () => {
  let component: GachaTestComponent;
  let fixture: ComponentFixture<GachaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
