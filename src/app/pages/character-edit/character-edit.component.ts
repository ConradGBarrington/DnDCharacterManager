import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss']
})
export class CharacterEditComponent implements OnInit {

  public character: Character;

  constructor() {
    this.character = new Character();
  }

  ngOnInit(): void {
  }

}
