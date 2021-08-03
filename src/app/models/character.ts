import { AbilityBonus } from "../enums/ability-bonus";
import { EventEmitter } from '@angular/core';
import { CharacterProperty } from "../enums/character-properties";
import { calculateAbilityModifier } from "../utils/calculateAbilityModifier";
import { calculateSavingThrow } from "../utils/calculateSavingThrow";
import { calculateAbilityCheckBonus } from "../utils/calculateAbilityCheckBonus";
import { Ability, AbilityCheck } from "../enums/ability";
import { abilityCheckAbilityMap } from "../constants/ability-check-map";
import { Dice } from "./dice";
import { Armor } from "./armor";
import { Shield } from "./shield";
import { Weapon } from "./weapon";
import { Item } from "./item";
import { Currency } from "./currency";
import { Rarity, raritySelectMap } from "../enums/rarity";
import { Feature } from "./feature";

export class Character {

  public propertyEventEmitter: EventEmitter<CharacterProperty> = new EventEmitter<CharacterProperty>();

  public name: string | undefined;
  public characterClass: string | undefined;
  public level: number = 1;
  public background: string | undefined;
  public alignment: string | undefined;
  public race: string | undefined;
  public experience: number | undefined;

  //abilities
  public strength: number | undefined;
  public dexterity: number | undefined;
  public constitution: number | undefined;
  public intelligence: number | undefined;
  public wisdom: number | undefined;
  public charisma: number | undefined;

  //calculated ability modifiers
  public get strengthModifier(): number {
    return calculateAbilityModifier(this.strength || 0);
  };
  public get dexterityModifier(): number {
    return calculateAbilityModifier(this.dexterity || 0);
  };
  public get constitutionModifier(): number {
    return calculateAbilityModifier(this.constitution || 0);
  };
  public get intelligenceModifier(): number {
    return calculateAbilityModifier(this.intelligence || 0);
  };
  public get wisdomModifier(): number {
    return calculateAbilityModifier(this.wisdom || 0);
  };
  public get charismaModifier(): number {
    return calculateAbilityModifier(this.charisma || 0);
  };

  //saving throw proficiencies
  public strengthSavingThrowProficiency: boolean = false;
  public dexteritySavingThrowProficiency: boolean = false;
  public constitutionSavingThrowProficiency: boolean = false;
  public intelligenceSavingThrowProficiency: boolean = false;
  public wisdomSavingThrowProficiency: boolean = false;
  public charismaSavingThrowProficiency: boolean = false;

  //saving throw modifiers
  public get strengthSavingThrowModifier(): number {
    return calculateSavingThrow(this.strength || 0, this.level, this.strengthSavingThrowProficiency);
  }
  public get dexteritySavingThrowModifier(): number {
    return calculateSavingThrow(this.dexterity || 0, this.level, this.dexteritySavingThrowProficiency);
  }
  public get constitutionSavingThrowModifier(): number {
    return calculateSavingThrow(this.constitution || 0, this.level, this.constitutionSavingThrowProficiency);
  }
  public get intelligenceSavingThrowModifier(): number {
    return calculateSavingThrow(this.intelligence || 0, this.level, this.intelligenceSavingThrowProficiency);
  }
  public get wisdomSavingThrowModifier(): number {
    return calculateSavingThrow(this.wisdom || 0, this.level, this.wisdomSavingThrowProficiency);
  }
  public get charismaSavingThrowModifier(): number {
    return calculateSavingThrow(this.charisma || 0, this.level, this.charismaSavingThrowProficiency);
  }

  //ability proficiencies
  public acrobaticsAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public animalHandlingAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public arcanaAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public athleticsAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public deceptionAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public historyAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public insightAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public intimidationAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public investigationAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public medicineAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public natureAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public perceptionAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public performanceAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public persuasionAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public religionAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public sleightOfHandAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public stealthAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  public survivalAbilityProficiency: AbilityBonus = AbilityBonus.NONE;
  
  //calculated skill modifiers
  public get acrobaticsAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.ACROBATICS), this.level, this.acrobaticsAbilityProficiency);
  }
  public get animalHandlingAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.ANIMAL_HANDLING), this.level, this.animalHandlingAbilityProficiency);
  }
  public get arcanaAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.ARCANA), this.level, this.arcanaAbilityProficiency);
  }
  public get athleticsAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.ATHLETICS), this.level, this.athleticsAbilityProficiency);
  }
  public get deceptionAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.DECEPTION), this.level, this.deceptionAbilityProficiency);
  }
  public get historyAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.HISTORY), this.level, this.historyAbilityProficiency);
  }
  public get insightAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.INSIGHT), this.level, this.insightAbilityProficiency);
  }
  public get intimidationAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.INTIMIDATION), this.level, this.intimidationAbilityProficiency);
  }
  public get investigationAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.INVESTIGATION), this.level, this.investigationAbilityProficiency);
  }
  public get medicineAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.MEDICINE), this.level, this.medicineAbilityProficiency);
  }
  public get natureAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.NATURE), this.level, this.natureAbilityProficiency);
  }
  public get perceptionAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.PERCEPTION), this.level, this.perceptionAbilityProficiency);
  }
  public get performanceAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.PERFORMANCE), this.level, this.performanceAbilityProficiency);
  }
  public get persuasionAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.PERSUASION), this.level, this.persuasionAbilityProficiency);
  }
  public get religionAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.RELIGION), this.level, this.religionAbilityProficiency);
  }
  public get sleightOfHandAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.SLEIGHT_OF_HAND), this.level, this.sleightOfHandAbilityProficiency);
  }
  public get stealthAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.STEALTH), this.level, this.stealthAbilityProficiency);
  }
  public get survivalAbilityModifier(): number {
    return calculateAbilityCheckBonus(this.getParentAbilityValue(AbilityCheck.SURVIVAL), this.level, this.survivalAbilityProficiency);
  }
  public get passivePerception(): number {
    return 10 + this.perceptionAbilityModifier;
  }

  //combat values
  public get initiative(): number {
    return this.dexterityModifier;
  };
  public speed: number | undefined;
  public hitDice: Dice | undefined;
  public get hitpointMaximum(): number | undefined {
    if (!this.hitDice || !this.constitution) {
      return undefined;
    } else {
      return this.hitDice.value + this.constitutionModifier + (((this.level || 0) - 1) * (this.constitutionModifier + (this.hitDice.value / 2) + 1));
    } 
  };

  //inventory
  public equippedArmor: Armor | undefined;
  public equippedMainHand: Weapon | Shield | undefined;
  public equippedOffHand: Weapon | Shield | undefined;
  public equippedItems: Array<Item> = [];

  public currencies: Array<Currency> = [
    new Currency('Copper'),
    new Currency('Silver'),
    new Currency('Electrum'),
    new Currency('Gold'),
    new Currency('Platinum'),
  ];
  public items: Array<Item> = [];
  public weapons: Array<Weapon> = [];
  public shields: Array<Shield> = [];
  public armors: Array<Armor> = [];

  public get armorClass(): number {
    let armorClassHold = 10 + this.dexterityModifier;

    if (this.armors) {
      for (const armor of this.armors) {
        if (armor.equipped) {
          armorClassHold = armor.calculateArmorClass(this.dexterityModifier);
          break;
        }
      }
    }

    if (this.shields) {
      for (const shield of this.shields) {
        if (shield.equipped) {
          armorClassHold += (shield.armorBonus || 0);
        }
      }
    }

    return armorClassHold;
  }

  //traits
  public languages: Array<string> = [];
  public proficiencies: Array<string> = [];
  public features: Array<Feature> = [];

  //personality
  public personalityTraits: string | undefined;
  public ideals: string | undefined;
  public bonds: string | undefined;
  public flaws: string | undefined;

  public getParentAbilityValue(skill: AbilityCheck) {
    switch(abilityCheckAbilityMap.get(skill)) {
      case Ability.STRENGTH: {
        return this.strength || 0;
      }
      case Ability.DEXTERITY: {
        return this.dexterity || 0;
      }
      case Ability.CONSTITUTION: {
        return this.constitution || 0;
      }
      case Ability.INTELLIGENCE: {
        return this.intelligence || 0;
      }
      case Ability.WISDOM: {
        return this.wisdom || 0;
      }
      case Ability.CHARISMA: {
        return this.charisma || 0;
      }
      default: {
        throw new Error('AbilityCheck did not match any parent abilities');
      }
    }
  }

  constructor() {}
}