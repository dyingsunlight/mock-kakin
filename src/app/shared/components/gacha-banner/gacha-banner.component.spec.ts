import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaBannerComponent } from './gacha-banner.component';

describe('GachaBannerComponent', () => {
  let component: GachaBannerComponent;
  let fixture: ComponentFixture<GachaBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachaBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
