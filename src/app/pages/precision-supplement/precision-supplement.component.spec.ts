import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecisionSupplementComponent } from './precision-supplement.component';

describe('PrecisionSupplementComponent', () => {
  let component: PrecisionSupplementComponent;
  let fixture: ComponentFixture<PrecisionSupplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecisionSupplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecisionSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
