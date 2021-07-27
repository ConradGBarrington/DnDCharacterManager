import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { raritySelectMap } from 'src/app/enums/rarity';
import { Item } from 'src/app/models/item';
import { itemTypeMap } from 'src/app/models/item-type';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  itemTypeMap = itemTypeMap;
  raritySelectMap = raritySelectMap;

  public modalName: string;
  public item: Item;
  public addMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<ItemEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { clickedItem: Item, character: Character}
  ) {
    if (!data?.clickedItem) {
      this.modalName = 'Add Item';
      this.item = new Item();
      this.addMode = true;
    } else {
      this.modalName = 'Edit Item';
      this.item = data.clickedItem;
      this.addMode = false;
    }
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem(): void {
    if (this.addMode) {
      this.data.character.items.push(this.item);
    }
    this.dialogRef.close();
  }

  deleteItem(): void {
    if (!this.addMode) {
      this.data.character.items = this.data.character.items.filter(item => item !== this.item);
    }
    this.dialogRef.close();
  }
}
