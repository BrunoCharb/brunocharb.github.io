import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeritageDetailsPageRoutingModule } from './heritage-details-routing.module';

import { HeritageDetailsPage } from './heritage-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeritageDetailsPageRoutingModule
  ],
  declarations: [HeritageDetailsPage]
})
export class HeritageDetailsPageModule {}
