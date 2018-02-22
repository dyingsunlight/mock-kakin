import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInButtonComponent } from './image-in-button.component';

describe('ImageInButtonComponent', () => {
  let component: ImageInButtonComponent;
  let fixture: ComponentFixture<ImageInButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageInButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageInButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
