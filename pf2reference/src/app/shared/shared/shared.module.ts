import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {BomberComponent} from '../../info/subclasses/alchemist/bomber/bomber.component';




@NgModule({
  declarations: [BomberComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BomberComponent]
})
export class SharedModule { }
