import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {BomberComponent} from '../../info/subclasses/alchemist/bomber/bomber.component';
import {ChirurgeonComponent} from '../../info/subclasses/alchemist/chirurgeon/chirurgeon.component';
import {MutagenistComponent} from '../../info/subclasses/alchemist/mutagenist/mutagenist.component';
import {ToxicologistComponent} from '../../info/subclasses/alchemist/toxicologist/toxicologist.component';


@NgModule({
  declarations: [BomberComponent,
    ChirurgeonComponent,
    MutagenistComponent,
    ToxicologistComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BomberComponent,
  ChirurgeonComponent,
  MutagenistComponent,
  ToxicologistComponent]
})
export class SharedModule { }
