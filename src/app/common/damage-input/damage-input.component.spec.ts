import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageInputComponent } from './damage-input.component';

describe('DamageInputComponent', () => {
  let component: DamageInputComponent;
  let fixture: ComponentFixture<DamageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
