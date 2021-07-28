import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';
import { AddLanguageComponent } from './add-language/add-language.component';
import { AddProficiencyComponent } from './add-proficiency/add-proficiency.component';

@Component({
  selector: 'app-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.scss']
})
export class ProficienciesComponent implements OnInit {

  @Input() character!: Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addLanguage(): void {
    let dialogRef = this.dialog.open(AddLanguageComponent, {
      width: '400px',
      data: { language: '', character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

  languageClick(clickedLanguage: string): void {
    let dialogRef = this.dialog.open(AddLanguageComponent, {
      width: '400px',
      data: { language: clickedLanguage, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

  addProficiency(): void {
    let dialogRef = this.dialog.open(AddProficiencyComponent, {
      width: '400px',
      data: { proficiency: '', character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

  proficiencyClick(clickedProficiency: string): void {
    let dialogRef = this.dialog.open(AddProficiencyComponent, {
      width: '400px',
      data: { proficiency: clickedProficiency, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

}
