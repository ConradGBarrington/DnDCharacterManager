import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterProperty } from 'src/app/enums/character-properties';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  CharacterProperty = CharacterProperty;

  constructor() { }

  @Input() character!: Character;

  ngOnInit(): void {
  }

}
