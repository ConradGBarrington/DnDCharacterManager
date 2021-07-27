export class Dice {
  public name: string;
  public value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
};

export const AllDice: Array<Dice> = [
  new Dice('Coin', 2),
  new Dice('D4', 4),
  new Dice('D6', 6),
  new Dice('D8', 8),
  new Dice('D10', 10),
  new Dice('D12', 12),
  new Dice('D20', 20),
];

export const HitDice: Array<Dice> = [
  new Dice('D6', 6),
  new Dice('D8', 8),
  new Dice('D10', 10),
  new Dice('D12', 12),
];

export const DamageDice: Array<Dice> = [
  new Dice('D4', 4),
  new Dice('D6', 6),
  new Dice('D8', 8),
  new Dice('D10', 10),
  new Dice('D12', 12),
  new Dice('D20', 20),
];