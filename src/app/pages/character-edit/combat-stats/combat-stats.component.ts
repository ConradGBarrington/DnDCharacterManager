import { Component, Input, OnInit } from '@angular/core';
import { CharacterProperty } from 'src/app/enums/character-properties';
import { Character } from 'src/app/models/character';
import { Dice, HitDice } from 'src/app/models/dice';

@Component({
  selector: 'app-combat-stats',
  templateUrl: './combat-stats.component.html',
  styleUrls: ['./combat-stats.component.scss']
})
export class CombatStatsComponent implements OnInit {

  public hitDice: Array<Dice> = HitDice;

  @Input() public character!: Character;

  public initiative: number | undefined;
  public hitpointMaximum: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initiative = this.character.initiative;
    this.hitpointMaximum = this.character.hitpointMaximum;

    this.character.propertyEventEmitter.subscribe(this.propertyChanged.bind(this));
  }

  public propertyChanged(property: CharacterProperty): void {
    switch(property) {
      case CharacterProperty.level: {
        this.hitpointMaximum = this.character.hitpointMaximum;
        break;
      }
      case CharacterProperty.dexterity: {
        this.initiative = this.character.initiative;
        break;
      }
      case CharacterProperty.constitution: {
        this.hitpointMaximum = this.character.hitpointMaximum;
        break;
      }
    }
  }

  public hitDiceChange(): void {
    this.hitpointMaximum = this.character.hitpointMaximum;
  }
}
