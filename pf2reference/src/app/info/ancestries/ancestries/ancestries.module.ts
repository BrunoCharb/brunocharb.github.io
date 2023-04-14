import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AncestriesPageRoutingModule } from './ancestries-routing.module';

import { AncestriesPage } from './ancestries.page';
import {AncestryCardComponent} from '../../../cards/ancestry-card/ancestry-card.component';
import {HeritageCardComponent} from '../../../cards/heritage-card/heritage-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AncestriesPageRoutingModule
  ],
    declarations: [AncestriesPage, AncestryCardComponent, HeritageCardComponent]
})
export class AncestriesPageModule {}
