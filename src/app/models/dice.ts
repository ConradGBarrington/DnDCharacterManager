export interface Dice {
  name: string,
  value: number,
};

export const AllDice: Array<Dice> = [
  {
    name: 'Coin',
    value: 2,
  },
  {
    name: 'D4',
    value: 4,
  },
  {
    name: 'D6',
    value: 6,
  },
  {
    name: 'D8',
    value: 8,
  },
  {
    name: 'D10',
    value: 10,
  },
  {
    name: 'D12',
    value: 12,
  },
  {
    name: 'D20',
    value: 20,
  },
];

export const HitDice: Array<Dice> = [
  {
    name: 'D6',
    value: 6,
  },
  {
    name: 'D8',
    value: 8,
  },
  {
    name: 'D10',
    value: 10,
  },
  {
    name: 'D12',
    value: 12,
  }
];