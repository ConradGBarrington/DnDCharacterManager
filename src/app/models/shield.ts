import { Item } from "./item";

export class Shield extends Item {
  armorBonus: number | undefined;

  constructor() {
    super();
    this.equippable = true;
  }
};