import { Item } from './item';

export class Armor extends Item {
  baseValue: number | undefined;
  addDexMod: boolean;
  stealthDisadvantage: boolean;

  constructor() {
    super();
    this.addDexMod = false;
    this.stealthDisadvantage = false;
    this.equippable = true;
  }

  calculateArmorClass(dexterityModifier: number): number {
    if (this.addDexMod) {
      return (this.baseValue || 0) + dexterityModifier;
    } else {
      return (this.baseValue || 0);
    }
  }
};