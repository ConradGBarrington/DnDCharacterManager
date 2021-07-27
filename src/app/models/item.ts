import { Rarity } from "../enums/rarity";

export class Item {
  name: string | undefined;
  weight: number | undefined;
  rarity: Rarity | undefined;
  requiresAttunement: boolean;
  description: string | undefined;
  equippable: boolean;
  equipped: boolean;

  constructor() {
    this.requiresAttunement = false;
    this.equippable = false;
    this.equipped = false;
  }
};