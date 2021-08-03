import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-backstory',
  templateUrl: './backstory.component.html',
  styleUrls: ['./backstory.component.scss']
})
export class BackstoryComponent implements OnInit {

  @Input() character!: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
