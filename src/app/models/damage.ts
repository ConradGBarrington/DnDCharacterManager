import { Dice } from "./dice";

export interface Damage {
  type: string,
  dice: Dice,
  diceCount: number,
  modifier: number,
}