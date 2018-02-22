import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GachaRevealItemComponent } from './reveal-item.component';

describe('GachaRevealItemComponent', () => {
  let component: GachaRevealItemComponent;
  let fixture: ComponentFixture<GachaRevealItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GachaRevealItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GachaRevealItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
