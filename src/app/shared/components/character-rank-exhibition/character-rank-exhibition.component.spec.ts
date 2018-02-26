import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRankExhibitionComponent } from './character-rank-exhibition.component';

describe('CharacterRankExhibitionComponent', () => {
  let component: CharacterRankExhibitionComponent;
  let fixture: ComponentFixture<CharacterRankExhibitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterRankExhibitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRankExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
