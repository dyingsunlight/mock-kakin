import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionSupplementComponent } from './extension-supplement.component';

describe('ExtensionSupplementComponent', () => {
  let component: ExtensionSupplementComponent;
  let fixture: ComponentFixture<ExtensionSupplementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionSupplementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
