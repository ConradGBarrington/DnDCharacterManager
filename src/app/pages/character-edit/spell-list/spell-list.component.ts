import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { abilitySelectMap } from 'src/app/enums/ability';
import { Character } from 'src/app/models/character';
import { Spell } from 'src/app/models/spell';
import { SpellEditComponent } from './spell-edit/spell-edit.component';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {

  abilitySelectMap = abilitySelectMap;

  @Input() character!: Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addSpell() {
    let dialogRef = this.dialog.open(SpellEditComponent, {
      width: '600px',
      data: { character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {

    });
  }

  selectSpell(clickedSpell: Spell) {
    let dialogRef = this.dialog.open(SpellEditComponent, {
      width: '600px',
      data: { clickedSpell, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {

    });
  }

}
