import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackgroundsPageRoutingModule } from './backgrounds-routing.module';

import { BackgroundsPage } from './backgrounds.page';
import { BgDisplayComponent } from '../bg-display/bg-display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackgroundsPageRoutingModule
  ],
  declarations: [BackgroundsPage, BgDisplayComponent]
})
export class BackgroundsPageModule {}
