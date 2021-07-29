import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';
import { Feature } from 'src/app/models/feature';
import { AddFeatureComponent } from './add-feature/add-feature.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @Input() character!: Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addFeature() {
    let dialogRef = this.dialog.open(AddFeatureComponent, {
      width: '600px',
      data: { character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

  featureClick(clickedFeature: Feature): void {
    let dialogRef = this.dialog.open(AddFeatureComponent, {
      width: '600px',
      data: { feature: clickedFeature, character: this.character }
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }

}
