import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { abilitySelectMap } from 'src/app/enums/ability';
import { SpellLevel, spellLevelSelectMap } from 'src/app/enums/spell-level';
import { Character } from 'src/app/models/character';
import { Spell } from 'src/app/models/spell';

@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styleUrls: ['./spell-edit.component.scss']
})
export class SpellEditComponent implements OnInit {

  spellLevelSelectMap = spellLevelSelectMap;
  abilitySelectMap = abilitySelectMap;

  public modalName: string;
  public spell: Spell;
  public addMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<SpellEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clickedSpell: Spell, character: Character}
  ) {
    if (!data?.clickedSpell) {
      this.modalName = 'Add Spell';
      this.spell = new Spell();
      this.spell.spellcastingAbility = data.character.defaultSpellAbility;
      this.addMode = true;
    } else {
      this.modalName = 'Edit Spell';
      this.spell = data.clickedSpell;
      this.addMode = false;
    }
  }

  ngOnInit(): void {
  }

  addSpell(): void {
    if (this.spell.level) {
      if (this.addMode) {
        switch (this.spell.level) {
          case SpellLevel.CANTRIP: {
            this.data.character.cantripsList.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL1: {
            this.data.character.spellList1.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL2: {
            this.data.character.spellList2.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL3: {
            this.data.character.spellList3.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL4: {
            this.data.character.spellList4.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL5: {
            this.data.character.spellList5.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL6: {
            this.data.character.spellList6.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL7: {
            this.data.character.spellList7.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL8: {
            this.data.character.spellList8.push(this.spell);
            break;
          }
          case SpellLevel.LEVEL9: {
            this.data.character.spellList9.push(this.spell);
            break;
          }
        }
      }
      this.dialogRef.close();
    } else {
      //error case for 
    }
  }

  deleteSpell(): void {
    if (!this.addMode) {
      switch (this.spell.level) {
        case SpellLevel.CANTRIP: {
          this.data.character.cantripsList = this.data.character.cantripsList.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL1: {
          this.data.character.spellList1 = this.data.character.spellList1.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL2: {
          this.data.character.spellList2 = this.data.character.spellList2.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL3: {
          this.data.character.spellList3 = this.data.character.spellList3.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL4: {
          this.data.character.spellList4 = this.data.character.spellList4.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL5: {
          this.data.character.spellList5 = this.data.character.spellList5.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL6: {
          this.data.character.spellList6 = this.data.character.spellList6.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL7: {
          this.data.character.spellList7 = this.data.character.spellList7.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL8: {
          this.data.character.spellList8 = this.data.character.spellList8.filter(spell => spell !== this.spell);
          break;
        }
        case SpellLevel.LEVEL9: {
          this.data.character.spellList9 = this.data.character.spellList9.filter(spell => spell !== this.spell);
          break;
        }
      }
    }
    this.dialogRef.close();
  }

}
