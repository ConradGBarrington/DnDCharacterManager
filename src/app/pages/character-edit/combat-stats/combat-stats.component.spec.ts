import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatStatsComponent } from './combat-stats.component';

describe('CombatStatsComponent', () => {
  let component: CombatStatsComponent;
  let fixture: ComponentFixture<CombatStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
