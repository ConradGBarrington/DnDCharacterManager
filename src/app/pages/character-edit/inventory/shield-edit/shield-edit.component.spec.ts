import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldEditComponent } from './shield-edit.component';

describe('ShieldEditComponent', () => {
  let component: ShieldEditComponent;
  let fixture: ComponentFixture<ShieldEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShieldEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShieldEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
