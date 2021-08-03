import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';
import { Relationship } from 'src/app/models/relationships';
import { AddRelationshipComponent } from './add-relationship/add-relationship.component';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss']
})
export class RelationshipsComponent implements OnInit {

  @Input() character!: Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addRelationship(): void {
    let dialogRef = this.dialog.open(AddRelationshipComponent, {
      width: '600px',
      data: { relationship: undefined, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

  relationshipClick(clickedRelationship: Relationship): void {
    let dialogRef = this.dialog.open(AddRelationshipComponent, {
      width: '600px',
      data: { relationship: clickedRelationship, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

}
