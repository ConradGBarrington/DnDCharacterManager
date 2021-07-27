import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Rarity, raritySelectMap } from 'src/app/enums/rarity';
import { Armor } from 'src/app/models/armor';
import { Character } from 'src/app/models/character';
import { Item } from 'src/app/models/item';
import { Shield } from 'src/app/models/shield';
import { Weapon } from 'src/app/models/weapon';
import { ArmorEditComponent } from './armor-edit/armor-edit.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ShieldEditComponent } from './shield-edit/shield-edit.component';
import { WeaponEditComponent } from './weapon-edit/weapon-edit.component';
import { damagesToString } from 'src/app/utils/damageUtils';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  damagesToString = damagesToString;

  @Input()
  character!: Character;

  @ViewChild('items')
  itemTable!: MatTable<any>;

  @ViewChild('weapons')
  weaponTable!: MatTable<any>;

  @ViewChild('armors')
  armorTable!: MatTable<any>;

  @ViewChild('shields')
  shieldTable!: MatTable<any>;


  displayedColumns: string[] = ['name', 'weight', 'rarity'];
  displayedColumnsArmor: string[] = ['name', 'armor', 'weight', 'rarity', 'equip'];
  displayedColumnsShield: string[] = ['name', 'armor', 'weight', 'rarity', 'equip'];
  displayedColumnsWeapon: string[] = ['name', 'damage', 'handedness', 'rarity', 'equip'];

  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {}


  rarityToString(rarity: Rarity) {
    const rarityString = raritySelectMap.find((rare: { key: string, value: string | Rarity; }) => rare.value === rarity);

    if (rarityString) {
      return rarityString.key;
    } else {
      return '';
    }
  }

  itemClick(clickedItem: Item) {
    let dialogRef = this.dialog.open(ItemEditComponent, {
      width: '600px',
      data: { clickedItem, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.itemTable) {
        this.itemTable.renderRows();
      }
    });
  }

  addItem() {
    let dialogRef = this.dialog.open(ItemEditComponent, {
      width: '600px',
      data: { character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.itemTable) {
        this.itemTable.renderRows();
      }
    });
  }

  weaponClick(clickedWeapon: Weapon) {
    let dialogRef = this.dialog.open(WeaponEditComponent, {
      width: '80%',
      maxHeight: '90vh',
      data: { clickedWeapon, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.weaponTable) {
        this.weaponTable.renderRows();
      }
    });
  }

  addWeapon() {
    let dialogRef = this.dialog.open(WeaponEditComponent, {
      width: '80%',
      maxHeight: '90vh',
      data: { character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.weaponTable) {
        this.weaponTable.renderRows();
      }
    });
  }

  equipWeapon(event: any, weaponIn: Weapon) {
    event.stopPropagation();
    weaponIn.equipped = true;
  }

  unequipWeapon(event: any, weaponIn: Weapon) {
    event.stopPropagation();
    weaponIn.equipped = false;
  }

  shieldClick(clickedShield: Shield) {
    let dialogRef = this.dialog.open(ShieldEditComponent, {
      width: '600px',
      data: { clickedShield, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.shieldTable) {
        this.shieldTable.renderRows();
      }
    });
  }

  addShield() {
    let dialogRef = this.dialog.open(ShieldEditComponent, {
      width: '600px',
      data: { character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.shieldTable) {
        this.shieldTable.renderRows();
      }
    });
  }

  armorClick(clickedArmor: Armor) {
    let dialogRef = this.dialog.open(ArmorEditComponent, {
      width: '600px',
      data: { clickedArmor, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.armorTable) {
        this.armorTable.renderRows();
      }
    });
  }
  
  addArmor() {
    let dialogRef = this.dialog.open(ArmorEditComponent, {
      width: '600px',
      data: { character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.armorTable) {
        this.armorTable.renderRows();
      }
    });
  }

  equipArmor(event: any, armorIn: Armor) {
    event.stopPropagation();
    for (const armor of this.character.armors) {
      if (armor.equipped) {
        armor.equipped = false;
      }
    }
    armorIn.equipped = true;
  }

  unequipArmor(event: any, armorIn: Armor) {
    event.stopPropagation();
    armorIn.equipped = false;
  }

}
