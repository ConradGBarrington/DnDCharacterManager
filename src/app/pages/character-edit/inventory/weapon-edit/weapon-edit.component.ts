import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ability, abilitySelectMap } from 'src/app/enums/ability';
import { handednessSelectMap } from 'src/app/enums/handedness';
import { raritySelectMap } from 'src/app/enums/rarity';
import { Character } from 'src/app/models/character';
import { Damage } from 'src/app/models/damage';
import { Weapon } from 'src/app/models/weapon';

@Component({
  selector: 'app-weapon-edit',
  templateUrl: './weapon-edit.component.html',
  styleUrls: ['./weapon-edit.component.scss']
})
export class WeaponEditComponent implements OnInit {

  raritySelectMap = raritySelectMap;
  abilitySelectMap = abilitySelectMap.filter(ability => ability.value === Ability.STRENGTH || ability.value === Ability.DEXTERITY);
  handednessSelectMap = handednessSelectMap;

  public modalName: string;
  public weapon: Weapon;
  public addMode: boolean;
  damageDeleteHandler: EventEmitter<Damage> = new EventEmitter<Damage>();

  constructor(
    public dialogRef: MatDialogRef<WeaponEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clickedWeapon: Weapon, character: Character}
  ) { 
    if (!data?.clickedWeapon) {
      this.modalName = 'Add Weapon';
      this.weapon = new Weapon();
      this.addMode = true;
    } else {
      this.modalName = 'Edit Weapon';
      this.weapon = data.clickedWeapon;
      this.addMode = false;
    }
  }

  ngOnInit(): void {
    this.damageDeleteHandler.subscribe(damage => {
      this.weapon.damage = this.weapon.damage.filter(damageFilter => damageFilter !== damage);
    });
  }

  addWeapon(): void {
    if (this.addMode) {
      this.data.character.weapons.push(this.weapon);
    }
    this.dialogRef.close();
  }

  deleteWeapon(): void {
    if (!this.addMode) {
      this.data.character.weapons = this.data.character.weapons.filter(weapon => weapon !== this.weapon);
    }
    this.dialogRef.close();
  }

  addDamage(): void {
    this.weapon.damage.push(new Damage());
  }

}
