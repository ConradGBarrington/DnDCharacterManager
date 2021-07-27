import { Damage } from "../models/damage";

export function damagesToString(damages: Array<Damage>): string {
  return damages.sort((damage1, damage2) => {
    if (!damage1.dice) {
      return -1;
    } else if (!damage2.dice) {
      return 1;
    }
    return damage1.dice.value - damage2.dice.value;
  })
  .map(damage => damage.toString())
  .reduce((acc = '', damage) => {
    if (acc) {
      return acc + `, ${damage}`;
    } else {
      return damage;
    }
  });
}

// export function rollDamages(damages: Array<Damage>): number {

// }