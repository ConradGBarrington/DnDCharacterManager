import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTraditionalViewComponent } from './character-traditional-view.component';

describe('CharacterTrraditionalViewComponent', () => {
  let component: CharacterTraditionalViewComponent;
  let fixture: ComponentFixture<CharacterTraditionalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterTraditionalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterTraditionalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
