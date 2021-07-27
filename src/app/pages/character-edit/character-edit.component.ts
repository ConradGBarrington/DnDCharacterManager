import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss']
})
export class CharacterEditComponent implements OnInit {

  @Input()
  public character: Character;
  newCharacter: boolean = false;

  constructor() {
    this.newCharacter = true;
    this.character = new Character();
  }

  ngOnInit(): void {
  }

}
