import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';
import { Relationship } from 'src/app/models/relationships';

@Component({
  selector: 'app-add-relationship',
  templateUrl: './add-relationship.component.html',
  styleUrls: ['./add-relationship.component.scss']
})
export class AddRelationshipComponent implements OnInit {

  addMode: boolean;
  modalName: string;
  relationship: Relationship;

  constructor(
    public dialogRef: MatDialogRef<AddRelationshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { relationship: Relationship, character: Character }
  ) {
    if (data.relationship) {
      this.relationship =  data.relationship;
      this.modalName = 'Edit Relationship';
      this.addMode = false;
    } else {
      this.relationship =  new Relationship();
      this.modalName = 'Add Relationship';
      this.addMode = true;
    }
  }

  ngOnInit(): void {
  }

  addRelationship(): void {
    if (this.addMode) {
      this.data.character.relationships.push(this.relationship);
    } else {
      let index = this.data.character.relationships.findIndex(relationship => relationship === this.data.relationship);
      this.data.character.relationships[index] = this.relationship;
    }
    this.dialogRef.close();
  }

  deleteRelationship(): void {
    if (!this.addMode) {
      this.data.character.relationships = this.data.character.relationships.filter(relationship => relationship !== this.relationship);
    }
    this.dialogRef.close();
  }
}
