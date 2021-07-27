import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character';
import { calculateSavingThrow } from 'src/app/utils/calculateSavingThrow';
import { CharacterProperty } from 'src/app/enums/character-properties';
import { AbilityBonus } from 'src/app/enums/ability-bonus';
import { Ability, AbilityCheck, AbilityChecks } from 'src/app/enums/ability';
import { abilityAbilityCheckMap } from 'src/app/constants/ability-check-map';
import { rollDice } from 'src/app/utils/rollDice';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  AbilityBonusObjects = Object.entries(AbilityBonus).map(value => {
    return {
      key: value[0],
      value: value[1],
    };
  });

  AbilityCheck = AbilityCheck;

  @Input() character!: Character;
  @Input() newCharacter: boolean = false;

  //rolledAbilities
  ability1: number = 0;
  ability2: number = 0;
  ability3: number = 0;
  ability4: number = 0;
  ability5: number = 0;
  ability6: number = 0;

  //ability modifier
  public strengthModifier: number = 0;
  public dexterityModifier: number = 0;
  public constitutionModifier: number = 0;
  public intelligenceModifier: number = 0;
  public wisdomModifier: number = 0;
  public charismaModifier: number = 0;

  //ability saving throw values
  public strengthSavingThrow: number = 0;
  public dexteritySavingThrow: number = 0;
  public constitutionSavingThrow: number = 0;
  public intelligenceSavingThrow: number = 0;
  public wisdomSavingThrow: number = 0;
  public charismaSavingThrow: number = 0;

  //ability check bonuses
  public acrobaticsAbilityBonus: number = 0;
  public animalHandlingAbilityBonus: number = 0;
  public arcanaAbilityBonus: number = 0;
  public athleticsAbilityBonus: number = 0;
  public deceptionAbilityBonus: number = 0;
  public historyAbilityBonus: number = 0;
  public insightAbilityBonus: number = 0;
  public intimidationAbilityBonus: number = 0;
  public investigationAbilityBonus: number = 0;
  public medicineAbilityBonus: number = 0;
  public natureAbilityBonus: number = 0;
  public perceptionAbilityBonus: number = 0;
  public performanceAbilityBonus: number = 0;
  public persuasionAbilityBonus: number = 0;
  public religionAbilityBonus: number = 0;
  public sleightOfHandAbilityBonus: number = 0;
  public stealthAbilityBonus: number = 0;
  public survivalAbilityBonus: number = 0;
  public passivePerception: number = 0;

  constructor() { }


  ngOnInit(): void {
    //calculate ability modifiers
    this.strengthModifier = this.character.strengthModifier;
    this.dexterityModifier = this.character.dexterityModifier;
    this.constitutionModifier = this.character.constitutionModifier;
    this.intelligenceModifier = this.character.intelligenceModifier;
    this.wisdomModifier = this.character.wisdomModifier;
    this.charismaModifier = this.character.charismaModifier;

    //ability saving throw values
    this.strengthSavingThrow = this.character.strengthSavingThrowModifier;
    this.dexteritySavingThrow = this.character.dexteritySavingThrowModifier;
    this.constitutionSavingThrow = this.character.constitutionSavingThrowModifier;
    this.intelligenceSavingThrow = this.character.intelligenceSavingThrowModifier;
    this.wisdomSavingThrow = this.character.wisdomSavingThrowModifier;
    this.charismaSavingThrow = this.character.charismaSavingThrowModifier;

    //ability check bonuses
    this.acrobaticsAbilityBonus = this.character.acrobaticsAbilityModifier;
    this.animalHandlingAbilityBonus = this.character.animalHandlingAbilityModifier;
    this.arcanaAbilityBonus = this.character.arcanaAbilityModifier;
    this.athleticsAbilityBonus = this.character.athleticsAbilityModifier;
    this.deceptionAbilityBonus = this.character.deceptionAbilityModifier;
    this.historyAbilityBonus = this.character.historyAbilityModifier;
    this.insightAbilityBonus = this.character.insightAbilityModifier;
    this.intimidationAbilityBonus = this.character.intimidationAbilityModifier;
    this.investigationAbilityBonus = this.character.investigationAbilityModifier;
    this.medicineAbilityBonus = this.character.medicineAbilityModifier;
    this.natureAbilityBonus = this.character.natureAbilityModifier;
    this.perceptionAbilityBonus = this.character.perceptionAbilityModifier;
    this.performanceAbilityBonus = this.character.performanceAbilityModifier;
    this.persuasionAbilityBonus = this.character.persuasionAbilityModifier;
    this.religionAbilityBonus = this.character.religionAbilityModifier;
    this.sleightOfHandAbilityBonus = this.character.sleightOfHandAbilityModifier;
    this.stealthAbilityBonus = this.character.stealthAbilityModifier;
    this.survivalAbilityBonus = this.character.survivalAbilityModifier;
    this.passivePerception = this.character.passivePerception;

    this.character.propertyEventEmitter.subscribe(this.propertyChanged.bind(this));
  }

  public abilityChange(ability: Ability): void {
    switch(ability) {
      case Ability.STRENGTH: {
        this.strengthModifier = this.character.strengthModifier;
        this.strengthSavingThrow = this.character.strengthSavingThrowModifier;
        break;
      }
      case Ability.DEXTERITY: {
        this.dexterityModifier = this.character.dexterityModifier;
        this.dexteritySavingThrow = this.character.dexteritySavingThrowModifier;
        this.character.propertyEventEmitter.emit(CharacterProperty.dexterity);
        break;
      }
      case Ability.CONSTITUTION: {
        this.constitutionModifier = this.character.constitutionModifier;
        this.constitutionSavingThrow = this.character.constitutionSavingThrowModifier;
        this.character.propertyEventEmitter.emit(CharacterProperty.constitution);
        break;
      }
      case Ability.INTELLIGENCE: {
        this.intelligenceModifier = this.character.intelligenceModifier;
        this.intelligenceSavingThrow = this.character.intelligenceSavingThrowModifier;
        break;
      }
      case Ability.WISDOM: {
        this.wisdomModifier = this.character.wisdomModifier;
        this.wisdomSavingThrow = this.character.wisdomSavingThrowModifier;
        break;
      }
      case Ability.CHARISMA: {
        this.charismaModifier = this.character.charismaModifier;
        this.charismaSavingThrow = this.character.charismaSavingThrowModifier;
        break;
      }
    }

    const affectedSkills = abilityAbilityCheckMap.get(ability);

    if (affectedSkills) {
      for (const affectedSkill of affectedSkills) {
        this.abilityBonusUpdate(affectedSkill);
      }
    }

  }

  public savingThrowChange(ability: Ability): void {
    switch(ability) {
      case Ability.STRENGTH: {
        this.strengthSavingThrow = this.character.strengthSavingThrowModifier;
        break;
      }
      case Ability.DEXTERITY: {
        this.dexteritySavingThrow = this.character.dexteritySavingThrowModifier;
        break;
      }
      case Ability.CONSTITUTION: {
        this.constitutionSavingThrow = this.character.constitutionSavingThrowModifier;
        break;
      }
      case Ability.INTELLIGENCE: {
        this.intelligenceSavingThrow = this.character.intelligenceSavingThrowModifier;
        break;
      }
      case Ability.WISDOM: {
        this.wisdomSavingThrow = this.character.wisdomSavingThrowModifier;
        break;
      }
      case Ability.CHARISMA: {
        this.charismaSavingThrow = this.character.charismaSavingThrowModifier;
        break;
      }
    }
  }

  public abilityBonusUpdate(abilityCheck: AbilityCheck): void {
    switch(abilityCheck) {
      case AbilityCheck.ACROBATICS: {
        this.acrobaticsAbilityBonus = this.character.acrobaticsAbilityModifier;
        break;
      }
      case AbilityCheck.ANIMAL_HANDLING: {
        this.animalHandlingAbilityBonus = this.character.animalHandlingAbilityModifier;
        break;
      }
      case AbilityCheck.ARCANA: {
        this.arcanaAbilityBonus = this.character.arcanaAbilityModifier;
        break;
      }
      case AbilityCheck.ATHLETICS: {
        this.athleticsAbilityBonus = this.character.athleticsAbilityModifier;
        break;
      }
      case AbilityCheck.DECEPTION: {
        this.deceptionAbilityBonus = this.character.deceptionAbilityModifier;
        break;
      }
      case AbilityCheck.HISTORY: {
        this.historyAbilityBonus = this.character.historyAbilityModifier;
        break;
      }
      case AbilityCheck.INSIGHT: {
        this.insightAbilityBonus = this.character.insightAbilityModifier;
        break;
      }
      case AbilityCheck.INTIMIDATION: {
        this.intimidationAbilityBonus = this.character.intimidationAbilityModifier;
        break;
      }
      case AbilityCheck.INVESTIGATION: {
        this.investigationAbilityBonus = this.character.investigationAbilityModifier;
        break;
      }
      case AbilityCheck.MEDICINE: {
        this.medicineAbilityBonus = this.character.medicineAbilityModifier;
        break;
      }
      case AbilityCheck.NATURE: {
        this.natureAbilityBonus = this.character.natureAbilityModifier;
        break;
      }
      case AbilityCheck.PERCEPTION: {
        this.perceptionAbilityBonus = this.character.perceptionAbilityModifier;
        this.passivePerception = this.character.passivePerception;
        break;
      }
      case AbilityCheck.PERFORMANCE: {
        this.performanceAbilityBonus = this.character.performanceAbilityModifier;
        break;
      }
      case AbilityCheck.PERSUASION: {
        this.persuasionAbilityBonus = this.character.persuasionAbilityModifier;
        break;
      }
      case AbilityCheck.RELIGION: {
        this.religionAbilityBonus = this.character.religionAbilityModifier;
        break;
      }
      case AbilityCheck.SLEIGHT_OF_HAND: {
        this.sleightOfHandAbilityBonus = this.character.sleightOfHandAbilityModifier;
        break;
      }
      case AbilityCheck.STEALTH: {
        this.stealthAbilityBonus = this.character.stealthAbilityModifier;
        break;
      }
      case AbilityCheck.SURVIVAL: {
        this.survivalAbilityBonus = this.character.survivalAbilityModifier;
        break;
      }
    }
  }


  public propertyChanged(property: CharacterProperty): void {
    switch(property) {
      case CharacterProperty.level: {
        this.strengthSavingThrow = calculateSavingThrow(this.character.strength || 0, this.character.level, this.character.strengthSavingThrowProficiency);
        this.dexteritySavingThrow = calculateSavingThrow(this.character.dexterity || 0, this.character.level, this.character.dexteritySavingThrowProficiency);
        this.constitutionSavingThrow = calculateSavingThrow(this.character.constitution || 0, this.character.level, this.character.constitutionSavingThrowProficiency);
        this.intelligenceSavingThrow = calculateSavingThrow(this.character.intelligence || 0, this.character.level, this.character.intelligenceSavingThrowProficiency);
        this.wisdomSavingThrow = calculateSavingThrow(this.character.wisdom || 0, this.character.level, this.character.wisdomSavingThrowProficiency);
        this.charismaSavingThrow = calculateSavingThrow(this.character.charisma || 0, this.character.level, this.character.charismaSavingThrowProficiency);

        for (const affectedSkill of AbilityChecks) {
          this.abilityBonusUpdate(affectedSkill);
        }
        break;
      }
    }
  }

  public rollAbilities(): void {
    this.ability1 = this._rollAbility();
    this.ability2 = this._rollAbility();
    this.ability3 = this._rollAbility();
    this.ability4 = this._rollAbility();
    this.ability5 = this._rollAbility();
    this.ability6 = this._rollAbility();
  }

  private _rollAbility(): number {
    const roll1 = rollDice(6);
    const roll2 = rollDice(6);
    const roll3 = rollDice(6);
    const roll4 = rollDice(6);

    const rolls = [roll1, roll2, roll3, roll4].sort();

    rolls.shift();
    return rolls.reduce((sum, value) => sum = (sum || 0) + value);
  }

}
