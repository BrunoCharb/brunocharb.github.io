import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AncestryDetailsPageRoutingModule } from './ancestry-details-routing.module';

import { AncestryDetailsPage } from './ancestry-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AncestryDetailsPageRoutingModule
  ],
  declarations: [AncestryDetailsPage]
})
export class AncestryDetailsPageModule {}
