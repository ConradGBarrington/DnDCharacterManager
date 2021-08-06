import { Ability } from "../enums/ability";
import { SpellLevel } from "../enums/spell-level";

export class Spell {
  name: string | undefined;
  school: string | undefined;
  description: string | undefined;
  castingTime: string | undefined;
  range: string | undefined;
  duration: string | undefined;
  isVerbal: boolean;
  isSomatic: boolean;
  hasComponents: boolean;
  components: string | undefined;
  isSave: boolean;
  isAttack: boolean;
  level: SpellLevel;
  spellcastingAbility: Ability | undefined;

  constructor() {
    this.level = SpellLevel.CANTRIP;
    this.isVerbal = false;
    this.isSomatic = false;
    this.hasComponents = false;
    this.isSave = false;
    this.isAttack = false;
  }
};