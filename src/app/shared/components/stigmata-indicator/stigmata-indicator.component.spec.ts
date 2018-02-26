import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StigmataIndicatorComponent } from './stigmata-indicator.component';

describe('StigmataIndicatorComponent', () => {
  let component: StigmataIndicatorComponent;
  let fixture: ComponentFixture<StigmataIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StigmataIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StigmataIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
