import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.scss']
})
export class PersonalityComponent implements OnInit {

  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
