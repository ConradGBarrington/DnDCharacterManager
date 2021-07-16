import { Item } from './item';

export interface Armor extends Item {
  baseValue: number,
  addDexMod: boolean,
  stealthDisadvantage: boolean,
};