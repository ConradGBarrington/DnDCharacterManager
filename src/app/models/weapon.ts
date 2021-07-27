import { Ability } from "../enums/ability";
import { Handedness } from "../enums/handedness";
import { Damage } from "./damage";
import { Item } from "./item";

export class Weapon extends Item {
  damage: Array<Damage>;
  handedness: Handedness | undefined;
  attackBonus: number | undefined;      //for +1 swords, etc.
  damageBonus: number | undefined;      //for static damage increases, for dice based increases add a damage
  abilityType: Ability | undefined;

  constructor() {
    super();
    this.damage = [new Damage()];
  }
}