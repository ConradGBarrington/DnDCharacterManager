import { Component, OnInit } from '@angular/core';

import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters: Array<Character> = [];

  constructor() {
    const testCharacter = new Character();
    testCharacter.name = 'Conrad Barrington';
    testCharacter.characterClass = 'Barbarian';
    testCharacter.race = 'Goliath';

    const testCharacter2 = new Character();
    testCharacter2.name = 'Test Person';
    testCharacter2.characterClass = 'Cleric';
    testCharacter2.race = 'Hill Dwarf'


    this.characters.push(testCharacter);
    this.characters.push(testCharacter2);

  }

  ngOnInit(): void {
  }

}
