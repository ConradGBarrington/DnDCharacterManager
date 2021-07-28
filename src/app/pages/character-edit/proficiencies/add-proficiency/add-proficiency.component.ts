import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-add-proficiency',
  templateUrl: './add-proficiency.component.html',
  styleUrls: ['./add-proficiency.component.scss']
})
export class AddProficiencyComponent implements OnInit {

  modalName: string;
  proficiency: string;
  addMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddProficiencyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { proficiency: string, character: Character }
  ) {
    if (data.proficiency) {
      this.proficiency =  data.proficiency;
      this.modalName = 'Edit Proficiency';
      this.addMode = false;
    } else {
      this.proficiency =  '';
      this.modalName = 'Add Proficiency';
      this.addMode = true;
    }
  }

  ngOnInit(): void {
  }

  addProficiency(): void {
    if (this.addMode) {
      this.data.character.proficiencies.push(this.proficiency);
    } else {
      let index = this.data.character.proficiencies.findIndex(proficiency => proficiency === this.data.proficiency);
      this.data.character.proficiencies[index] = this.proficiency;
    }
    this.dialogRef.close();
  }

  deleteProficiency(): void {
    if (!this.addMode) {
      this.data.character.proficiencies = this.data.character.proficiencies.filter(proficiency => proficiency !== this.proficiency);
    }
    this.dialogRef.close();
  }
}
