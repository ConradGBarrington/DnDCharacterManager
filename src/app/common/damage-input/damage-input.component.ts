import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Damage } from 'src/app/models/damage';
import { DamageDice } from 'src/app/models/dice';

@Component({
  selector: 'app-damage-input',
  templateUrl: './damage-input.component.html',
  styleUrls: ['./damage-input.component.scss']
})
export class DamageInputComponent implements OnInit {

  DamageDice = DamageDice;

  @Input() damage!: Damage;
  @Input() damageEmitter!: EventEmitter<Damage>;

  constructor() {

  }

  ngOnInit(): void {
  }

  deleteDamage(): void {
    this.damageEmitter.emit(this.damage);
  }

}
