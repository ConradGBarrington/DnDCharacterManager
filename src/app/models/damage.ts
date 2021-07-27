import { Dice } from "./dice";

export class Damage {
  type: string;
  dice: Dice | undefined;
  diceCount: number;
  modifier: number;

  constructor() {
    this.type = '';
    this.diceCount = 0;
    this.modifier = 0;
  }

  toString(): string {
    if (!this.dice || !this.diceCount || !this.type) {
      return '';
    } else  {
      let diceString: string = `${this.diceCount}${this.dice.name}`;
      if (this.modifier) {
        diceString = `${diceString} + ${this.modifier}`;
      }
      return `${diceString} ${this.type}`;
    }
  }
}