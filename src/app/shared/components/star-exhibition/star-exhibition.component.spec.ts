import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarExhibitionComponent } from './star-exhibition.component';

describe('StarExhibitionComponent', () => {
  let component: StarExhibitionComponent;
  let fixture: ComponentFixture<StarExhibitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarExhibitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
