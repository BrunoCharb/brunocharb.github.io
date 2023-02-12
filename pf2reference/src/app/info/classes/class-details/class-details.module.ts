import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassDetailsPageRoutingModule } from './class-details-routing.module';

import { ClassDetailsPage } from './class-details.page';
import {CommonSpellTableComponent} from '../../../spell-tables/common-spell-table/common-spell-table.component';
import {SorcererSpellTableComponent} from '../../../spell-tables/sorcerer-spell-table/sorcerer-spell-table.component';
import {MagusSpellTableComponent} from '../../../spell-tables/magus-spell-table/magus-spell-table.component';
import {PsychicSpellTableComponent} from '../../../spell-tables/psychic-spell-table/psychic-spell-table.component';
import {ClericSpellTableComponent} from '../../../spell-tables/cleric-spell-table/cleric-spell-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassDetailsPageRoutingModule
  ],
  declarations: [ClassDetailsPage,
    CommonSpellTableComponent,
    SorcererSpellTableComponent,
    MagusSpellTableComponent,
    PsychicSpellTableComponent,
    ClericSpellTableComponent]
})
export class ClassDetailsPageModule {}
