import { Ability, AbilityCheck } from "../enums/ability"

export const abilityCheckAbilityMap = new Map<AbilityCheck, Ability>([
  [AbilityCheck.ACROBATICS, Ability.DEXTERITY],
  [AbilityCheck.ANIMAL_HANDLING, Ability.WISDOM],
  [AbilityCheck.ARCANA, Ability.INTELLIGENCE],
  [AbilityCheck.ATHLETICS, Ability.STRENGTH],
  [AbilityCheck.DECEPTION, Ability.CHARISMA],
  [AbilityCheck.HISTORY, Ability.INTELLIGENCE],
  [AbilityCheck.INSIGHT, Ability.WISDOM],
  [AbilityCheck.INTIMIDATION, Ability.CHARISMA],
  [AbilityCheck.INVESTIGATION, Ability.INTELLIGENCE],
  [AbilityCheck.MEDICINE, Ability.WISDOM],
  [AbilityCheck.NATURE, Ability.INTELLIGENCE],
  [AbilityCheck.PERCEPTION, Ability.WISDOM],
  [AbilityCheck.PERFORMANCE, Ability.CHARISMA],
  [AbilityCheck.PERSUASION, Ability.CHARISMA],
  [AbilityCheck.RELIGION, Ability.INTELLIGENCE],
  [AbilityCheck.SLEIGHT_OF_HAND, Ability.DEXTERITY],
  [AbilityCheck.STEALTH, Ability.DEXTERITY],
  [AbilityCheck.SURVIVAL, Ability.WISDOM],
]);

export const abilityAbilityCheckMap = new Map<Ability, Array<AbilityCheck>>([
  [
    Ability.STRENGTH,
    [AbilityCheck.ATHLETICS],
  ],
  [
    Ability.DEXTERITY,
    [AbilityCheck.ACROBATICS, AbilityCheck.SLEIGHT_OF_HAND, AbilityCheck.STEALTH],
  ],
  [
    Ability.INTELLIGENCE,
    [AbilityCheck.ARCANA, AbilityCheck.HISTORY, AbilityCheck.INVESTIGATION, AbilityCheck.NATURE, AbilityCheck.RELIGION],
  ],
  [
    Ability.WISDOM,
    [AbilityCheck.ANIMAL_HANDLING, AbilityCheck.INSIGHT, AbilityCheck.MEDICINE, AbilityCheck.PERCEPTION, AbilityCheck. SURVIVAL],
  ],
  [
    Ability.CHARISMA,
    [AbilityCheck.DECEPTION, AbilityCheck.INTIMIDATION, AbilityCheck.PERFORMANCE, AbilityCheck.PERSUASION],
  ],
  [
    Ability.CONSTITUTION,
    [],
  ],
]);