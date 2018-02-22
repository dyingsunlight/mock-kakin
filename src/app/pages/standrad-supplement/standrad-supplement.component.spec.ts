import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandradSupplementComponent } from './standrad-supplement.component';

describe('StandradSupplementComponent', () => {
  let component: StandradSupplementComponent;
  let fixture: ComponentFixture<StandradSupplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandradSupplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandradSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
