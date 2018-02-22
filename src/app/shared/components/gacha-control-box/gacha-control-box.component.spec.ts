import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaControlBoxComponent } from './gacha-control-box.component';

describe('GachaControlBoxComponent', () => {
  let component: GachaControlBoxComponent;
  let fixture: ComponentFixture<GachaControlBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachaControlBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaControlBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
