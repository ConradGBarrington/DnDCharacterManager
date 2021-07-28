import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.scss']
})
export class AddLanguageComponent implements OnInit {

  modalName: string;
  language: string;
  addMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddLanguageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { language: string, character: Character }
  ) {
    if (data.language) {
      this.language =  data.language;
      this.modalName = 'Edit Language';
      this.addMode = false;
    } else {
      this.language =  '';
      this.modalName = 'Add Language';
      this.addMode = true;
    }
  }

  ngOnInit(): void {
  }

  addLanguage(): void {
    if (this.addMode) {
      this.data.character.languages.push(this.language);
    } else {
      let index = this.data.character.languages.findIndex(language => language === this.data.language);
      this.data.character.languages[index] = this.language;
    }
    this.dialogRef.close();
  }

  deleteLanguage(): void {
    if (!this.addMode) {
      this.data.character.languages = this.data.character.languages.filter(language => language !== this.language);
    }
    this.dialogRef.close();
  }

}
