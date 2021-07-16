import { Handedness } from "../enums/handedness";
import { Damage } from "./damage";
import { Item } from "./item";

export interface Weapon extends Item {
  damage: Array<Damage>,
  handedness: Handedness,
  attackBonus: number,      //for +1 swords, etc.
  damageBonus: number,      //for static damage increases, for dice based increases add a damage
}