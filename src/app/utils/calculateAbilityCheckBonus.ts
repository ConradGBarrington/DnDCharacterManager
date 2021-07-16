import { AbilityBonus } from "../enums/ability-bonus";
import { calculateAbilityModifier } from "./calculateAbilityModifier";
import { calculateProficiencyBonus } from "./calculateProficiencyBonus";

export function calculateAbilityCheckBonus(parentAbility: number, level: number, proficientLevel: AbilityBonus) {
  
  switch (proficientLevel) {
    case AbilityBonus.EXPERTISE: {
      return calculateAbilityModifier(parentAbility) + calculateProficiencyBonus(level) * 2;
    }
    case AbilityBonus.PROFICIENT: {
      return calculateAbilityModifier(parentAbility) + calculateProficiencyBonus(level);
    }
    case AbilityBonus.NONE: {
      return calculateAbilityModifier(parentAbility);
    }
    default:{
      console.warn('Encountered an unhandled AbilityBonus value in calculateAbilityCheckBonus');
      return calculateAbilityModifier(parentAbility);
    }
  }
}