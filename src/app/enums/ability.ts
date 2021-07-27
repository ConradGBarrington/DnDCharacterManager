export enum Ability {
  STRENGTH,
  DEXTERITY,
  CONSTITUTION,
  INTELLIGENCE,
  WISDOM,
  CHARISMA,
};

export enum AbilityCheck {
  ACROBATICS,
  ANIMAL_HANDLING,
  ARCANA,
  ATHLETICS,
  DECEPTION,
  HISTORY,
  INSIGHT,
  INTIMIDATION,
  INVESTIGATION,
  MEDICINE,
  NATURE,
  PERCEPTION,
  PERFORMANCE,
  PERSUASION,
  RELIGION,
  SLEIGHT_OF_HAND,
  STEALTH,
  SURVIVAL,
};

export const AbilityChecks = [
  AbilityCheck.ACROBATICS,
  AbilityCheck.ANIMAL_HANDLING,
  AbilityCheck.ARCANA,
  AbilityCheck.ATHLETICS,
  AbilityCheck.DECEPTION,
  AbilityCheck.HISTORY,
  AbilityCheck.INSIGHT,
  AbilityCheck.INTIMIDATION,
  AbilityCheck.INVESTIGATION,
  AbilityCheck.MEDICINE,
  AbilityCheck.NATURE,
  AbilityCheck.PERCEPTION,
  AbilityCheck.PERFORMANCE,
  AbilityCheck.PERSUASION,
  AbilityCheck.RELIGION,
  AbilityCheck.SLEIGHT_OF_HAND,
  AbilityCheck.STEALTH,
  AbilityCheck.SURVIVAL,
];

export let abilitySelectMap: { key: string, value: string | Ability }[] = [];

for (const abilitySet of Object.entries(Ability)) {
  if (isNaN(Number(abilitySet[0]))) {

    let key: string = '';

    switch(abilitySet[0]) {
      case 'STRENGTH': {
        key = 'Strength';
        break;
      }
      case 'DEXTERITY': {
        key = 'Dexterity';
        break;
      }
      case 'CONSTITUTION': {
        key = 'Constitution';
        break;
      }
      case 'INTELLIGENCE': {
        key = 'Intelligence';
        break;
      }
      case 'WISDOM': {
        key = 'Wisdom';
        break;
      }
      case 'CHARISMA': {
        key = 'Charisma';
        break;
      }
    }


    abilitySelectMap.push({
      key,
      value: abilitySet[1],
    });
  }
}