import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { raritySelectMap } from 'src/app/enums/rarity';
import { Character } from 'src/app/models/character';
import { Shield } from 'src/app/models/shield';

@Component({
  selector: 'app-shield-edit',
  templateUrl: './shield-edit.component.html',
  styleUrls: ['./shield-edit.component.scss']
})
export class ShieldEditComponent implements OnInit {

  raritySelectMap = raritySelectMap;

  public modalName: string;
  public shield: Shield;
  public addMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<ShieldEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clickedShield: Shield, character: Character}
  ) {
    if (!data?.clickedShield) {
      this.modalName = 'Add Shield';
      this.shield = new Shield();
      this.addMode = true;
    } else {
      this.modalName = 'Edit Shield';
      this.shield = data.clickedShield;
      this.addMode = false;
    }
  }

  ngOnInit(): void {
  }

  addShield(): void {
    if (this.addMode) {
      this.data.character.shields.push(this.shield);
    }
    this.dialogRef.close();
  }

  deleteShield(): void {
    if (!this.addMode) {
      this.data.character.shields = this.data.character.shields.filter(shield => shield !== this.shield);
    }
    this.dialogRef.close();
  }

}
