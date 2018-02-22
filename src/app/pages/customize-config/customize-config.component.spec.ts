import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeConfigComponent } from './customize-config.component';

describe('CustomizeConfigComponent', () => {
  let component: CustomizeConfigComponent;
  let fixture: ComponentFixture<CustomizeConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
