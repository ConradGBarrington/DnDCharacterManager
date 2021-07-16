import { Ability } from "../enums/ability";

export interface Spell {
  name: string,
  description: string,
  isSave: boolean,
  isAttack: boolean,
  level: number,
  spellcastingAbility: Ability,
};