import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeSupplementComponent } from './customize-supplement.component';

describe('CustomizeSupplementComponent', () => {
  let component: CustomizeSupplementComponent;
  let fixture: ComponentFixture<CustomizeSupplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeSupplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
