import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaRevealComponent } from './gacha-reveal.component';

describe('GachaRevealComponent', () => {
  let component: GachaRevealComponent;
  let fixture: ComponentFixture<GachaRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachaRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
