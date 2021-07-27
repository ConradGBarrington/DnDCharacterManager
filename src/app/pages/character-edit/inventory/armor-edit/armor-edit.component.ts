import { Component, OnInit, Inject } from '@angular/core';
import { Armor } from 'src/app/models/armor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { raritySelectMap } from 'src/app/enums/rarity';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-armor-edit',
  templateUrl: './armor-edit.component.html',
  styleUrls: ['./armor-edit.component.scss']
})
export class ArmorEditComponent implements OnInit {

  raritySelectMap = raritySelectMap;

  public modalName: string;
  public armor: Armor;
  public addMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<ArmorEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clickedArmor: Armor, character: Character}
  ) {
    if (!data?.clickedArmor) {
      this.modalName = 'Add Armor';
      this.armor = new Armor();
      this.addMode = true;
    } else {
      this.modalName = 'Edit Armor';
      this.armor = data.clickedArmor;
      this.addMode = false;
    }
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addArmor(): void {
    if (this.addMode) {
      this.data.character.armors.push(this.armor);
    }
    this.dialogRef.close();
  }

  deleteArmor(): void {
    if (!this.addMode) {
      this.data.character.armors = this.data.character.armors.filter(armor => armor !== this.armor);
    }
    this.dialogRef.close();
  }

}
