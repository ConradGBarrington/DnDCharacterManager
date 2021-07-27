import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//Angular Material Imports
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CharacterEditComponent } from './pages/character-edit/character-edit.component';
import { CharacterTraditionalViewComponent } from './pages/character-traditional-view/character-traditional-view.component';
import { CharacterGuidedViewComponent } from './pages/character-guided-view/character-guided-view.component';
import { EditDeleteModalComponent } from './common/edit-delete-modal/edit-delete-modal.component';
import { BasicInfoComponent } from './pages/character-edit/basic-info/basic-info.component';
import { AbilitiesComponent } from './pages/character-edit/abilities/abilities.component';
import { CombatStatsComponent } from './pages/character-edit/combat-stats/combat-stats.component';
import { InventoryComponent } from './pages/character-edit/inventory/inventory.component';
import { ItemEditComponent } from './pages/character-edit/inventory/item-edit/item-edit.component';
import { ArmorEditComponent } from './pages/character-edit/inventory/armor-edit/armor-edit.component';
import { ShieldEditComponent } from './pages/character-edit/inventory/shield-edit/shield-edit.component';
import { WeaponEditComponent } from './pages/character-edit/inventory/weapon-edit/weapon-edit.component';
import { DamageInputComponent } from './common/damage-input/damage-input.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CharacterListComponent,
    CharacterEditComponent,
    CharacterTraditionalViewComponent,
    CharacterGuidedViewComponent,
    EditDeleteModalComponent,
    BasicInfoComponent,
    AbilitiesComponent,
    CombatStatsComponent,
    InventoryComponent,
    ItemEditComponent,
    ArmorEditComponent,
    ShieldEditComponent,
    WeaponEditComponent,
    DamageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
