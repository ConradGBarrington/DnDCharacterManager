import { calculateAbilityModifier } from "./calculateAbilityModifier";
import { calculateProficiencyBonus } from "./calculateProficiencyBonus";

export function calculateSavingThrow(ability: number, level: number, proficient: boolean): number {
  if (proficient) {
    return calculateAbilityModifier(ability) + calculateProficiencyBonus(level);
  } else {
    return calculateAbilityModifier(ability);
  }
}