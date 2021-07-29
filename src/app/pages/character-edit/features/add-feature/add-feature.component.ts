import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';
import { Feature } from 'src/app/models/feature';

@Component({
  selector: 'app-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {

  modalName: string;
  feature: Feature;
  addMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddFeatureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { feature: Feature, character: Character }
  ) {
    if (data.feature) {
      this.feature =  data.feature;
      this.modalName = 'Edit Feature';
      this.addMode = false;
    } else {
      this.feature =  new Feature();
      this.modalName = 'Add Feature';
      this.addMode = true;
    }
  }

  ngOnInit(): void {
  }

  addFeature(): void {
    if (this.addMode) {
      this.data.character.features.push(this.feature);
    }
    this.dialogRef.close();
  }

  deleteFeature(): void {
    if (!this.addMode) {
      this.data.character.features = this.data.character.features.filter(feature => feature !== this.feature);
    }
    this.dialogRef.close();
  }

}
