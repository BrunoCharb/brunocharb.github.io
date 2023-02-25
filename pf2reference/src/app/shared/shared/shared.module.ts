import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {BomberComponent} from '../../info/subclasses/alchemist/bomber/bomber.component';
import {ChirurgeonComponent} from '../../info/subclasses/alchemist/chirurgeon/chirurgeon.component';
import {MutagenistComponent} from '../../info/subclasses/alchemist/mutagenist/mutagenist.component';
import {ToxicologistComponent} from '../../info/subclasses/alchemist/toxicologist/toxicologist.component';
import {AnimalInstinctComponent} from '../../info/subclasses/barbarian/animal-instinct/animal-instinct.component';
import {DragonInstinctComponent} from '../../info/subclasses/barbarian/dragon-instinct/dragon-instinct.component';
import {FuryInstinctComponent} from '../../info/subclasses/barbarian/fury-instinct/fury-instinct.component';
import {GiantInstinctComponent} from '../../info/subclasses/barbarian/giant-instinct/giant-instinct.component';
import {SpiritInstinctComponent} from '../../info/subclasses/barbarian/spirit-instinct/spirit-instinct.component';
import {SuperstitionInstinctComponent} from '../../info/subclasses/barbarian/superstition-instinct/superstition-instinct.component';
import {EnigmaMuseComponent} from '../../info/subclasses/bard/enigma-muse/enigma-muse.component';
import {MaestroMuseComponent} from '../../info/subclasses/bard/maestro-muse/maestro-muse.component';
import {PolymathMuseComponent} from '../../info/subclasses/bard/polymath-muse/polymath-muse.component';
import {WarriorMuseComponent} from '../../info/subclasses/bard/warrior-muse/warrior-muse.component';
import {PaladinComponent} from '../../info/subclasses/champion/paladin/paladin.component';
import {RedeemerComponent} from '../../info/subclasses/champion/redeemer/redeemer.component';
import {LiberatorComponent} from '../../info/subclasses/champion/liberator/liberator.component';
import {TyrantComponent} from '../../info/subclasses/champion/tyrant/tyrant.component';
import {DesecratorComponent} from '../../info/subclasses/champion/desecrator/desecrator.component';
import {AntipaladinComponent} from '../../info/subclasses/champion/antipaladin/antipaladin.component';
import {CloisteredComponent} from '../../info/subclasses/cleric/cloistered/cloistered.component';
import {WarpriestComponent} from '../../info/subclasses/cleric/warpriest/warpriest.component';

@NgModule({
  declarations: [BomberComponent,
  ChirurgeonComponent,
  MutagenistComponent,
  ToxicologistComponent,
  AnimalInstinctComponent,
  DragonInstinctComponent,
  FuryInstinctComponent,
  GiantInstinctComponent,
  SpiritInstinctComponent,
  SuperstitionInstinctComponent,
  EnigmaMuseComponent,
  MaestroMuseComponent,
  PolymathMuseComponent,
  WarriorMuseComponent,
  PaladinComponent,
  RedeemerComponent,
  LiberatorComponent,
  TyrantComponent,
  DesecratorComponent,
  AntipaladinComponent,
  CloisteredComponent,
  WarpriestComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [BomberComponent,
    ChirurgeonComponent,
    MutagenistComponent,
    ToxicologistComponent,
    AnimalInstinctComponent,
    DragonInstinctComponent,
    FuryInstinctComponent,
    GiantInstinctComponent,
    SpiritInstinctComponent,
    SuperstitionInstinctComponent,
    EnigmaMuseComponent,
    MaestroMuseComponent,
    PolymathMuseComponent,
    WarriorMuseComponent,
    PaladinComponent,
    RedeemerComponent,
    LiberatorComponent,
    TyrantComponent,
    DesecratorComponent,
    AntipaladinComponent,
    CloisteredComponent,
    WarpriestComponent]
})
export class SharedModule { }
