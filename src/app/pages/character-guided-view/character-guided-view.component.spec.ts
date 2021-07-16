import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGuidedViewComponent } from './character-guided-view.component';

describe('CharacterGuidedViewComponent', () => {
  let component: CharacterGuidedViewComponent;
  let fixture: ComponentFixture<CharacterGuidedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterGuidedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGuidedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
