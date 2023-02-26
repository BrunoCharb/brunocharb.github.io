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
import {AnimalDruidComponent} from '../../info/subclasses/druid/animal-druid/animal-druid.component';
import {FlameDruidComponent} from '../../info/subclasses/druid/flame-druid/flame-druid.component';
import {LeafDruidComponent} from '../../info/subclasses/druid/leaf-druid/leaf-druid.component';
import {StoneDruidComponent} from '../../info/subclasses/druid/stone-druid/stone-druid.component';
import {StormDruidComponent} from '../../info/subclasses/druid/storm-druid/storm-druid.component';
import {WaveDruidComponent} from '../../info/subclasses/druid/wave-druid/wave-druid.component';
import {WildDruidComponent} from '../../info/subclasses/druid/wild-druid/wild-druid.component';
import {DrifterComponent} from '../../info/subclasses/gunslinger/drifter/drifter.component';
import {PistoleroComponent} from '../../info/subclasses/gunslinger/pistolero/pistolero.component';
import {SniperComponent} from '../../info/subclasses/gunslinger/sniper/sniper.component';
import {SpellshotComponent} from '../../info/subclasses/gunslinger/spellshot/spellshot.component';
import {TriggerbrandComponent} from '../../info/subclasses/gunslinger/triggerbrand/triggerbrand.component';
import {VanguardComponent} from '../../info/subclasses/gunslinger/vanguard/vanguard.component';
import {ArmorInnovationComponent} from '../../info/subclasses/inventor/armor-innovation/armor-innovation.component';
import {ConstructInnovationComponent} from '../../info/subclasses/inventor/construct-innovation/construct-innovation.component';
import {WeaponInnovationComponent} from '../../info/subclasses/inventor/weapon-innovation/weapon-innovation.component';
import {AlchemicalSciencesComponent} from '../../info/subclasses/investigator/alchemical-sciences/alchemical-sciences.component';
import {EmpiricismComponent} from '../../info/subclasses/investigator/empiricism/empiricism.component';
import {ForensicMedicineComponent} from '../../info/subclasses/investigator/forensic-medicine/forensic-medicine.component';
import {InterrogationComponent} from '../../info/subclasses/investigator/interrogation/interrogation.component';
import {InexorableIronComponent} from '../../info/subclasses/magus/inexorable-iron/inexorable-iron.component';
import {LaughingShadowComponent} from '../../info/subclasses/magus/laughing-shadow/laughing-shadow.component';
import {SparklingTargeComponent} from '../../info/subclasses/magus/sparkling-targe/sparkling-targe.component';
import{StarlitSpanComponent} from '../../info/subclasses/magus/starlit-span/starlit-span.component';
import {TwistingTreeComponent} from '../../info/subclasses/magus/twisting-tree/twisting-tree.component';
import {AshComponent} from '../../info/subclasses/oracle/ash/ash.component';
import {AncestorsComponent} from '../../info/subclasses/oracle/ancestors/ancestors.component';
import {BattleComponent} from '../../info/subclasses/oracle/battle/battle.component';
import {BonesComponent} from '../../info/subclasses/oracle/bones/bones.component';
import {CosmosComponent} from '../../info/subclasses/oracle/cosmos/cosmos.component';
import {FlamesComponent} from '../../info/subclasses/oracle/flames/flames.component';
import {LifeComponent} from '../../info/subclasses/oracle/life/life.component';
import {LoreComponent} from '../../info/subclasses/oracle/lore/lore.component';
import {TempestComponent} from '../../info/subclasses/oracle/tempest/tempest.component';
import {TimeComponent} from '../../info/subclasses/oracle/time/time.component';
import {DistantGraspComponent} from '../../info/subclasses/psychic/distant-grasp/distant-grasp.component';
import {InfiniteEyeComponent} from '../../info/subclasses/psychic/infinite-eye/infinite-eye.component';
import {OscillatingWaveComponent} from '../../info/subclasses/psychic/oscillating-wave/oscillating-wave.component';
import {SilentWhisperComponent} from '../../info/subclasses/psychic/silent-whisper/silent-whisper.component';
import {TangibleDreamComponent} from '../../info/subclasses/psychic/tangible-dream/tangible-dream.component';
import {UnboundStepComponent} from '../../info/subclasses/psychic/unbound-step/unbound-step.component';
import {EmotionalAcceptanceComponent} from '../../info/subclasses/psychic/emotional-acceptance/emotional-acceptance.component';
import {GatheredLoreComponent} from '../../info/subclasses/psychic/gathered-lore/gathered-lore.component';
import {PreciseDisciplineComponent} from '../../info/subclasses/psychic/precise-discipline/precise-discipline.component';
import {WanderingReverieComponent} from '../../info/subclasses/psychic/wandering-reverie/wandering-reverie.component';

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
  WarpriestComponent,
  AnimalDruidComponent,
  FlameDruidComponent,
  LeafDruidComponent,
  StoneDruidComponent,
  StormDruidComponent,
  WaveDruidComponent,
  WildDruidComponent,
  DrifterComponent,
  PistoleroComponent,
  SniperComponent,
  SpellshotComponent,
  TriggerbrandComponent,
  VanguardComponent,
  ArmorInnovationComponent,
  ConstructInnovationComponent,
  WeaponInnovationComponent,
  AlchemicalSciencesComponent,
  EmpiricismComponent,
  ForensicMedicineComponent,
  InterrogationComponent,
  InexorableIronComponent,
  LaughingShadowComponent,
  SparklingTargeComponent,
  StarlitSpanComponent,
  TwistingTreeComponent,
  AncestorsComponent,
  AshComponent,
  BattleComponent,
  BonesComponent,
  CosmosComponent,
  FlamesComponent,
  LifeComponent,
  LoreComponent,
  TempestComponent,
  TimeComponent,
  DistantGraspComponent,
  InfiniteEyeComponent,
  OscillatingWaveComponent,
  SilentWhisperComponent,
  TangibleDreamComponent,
  UnboundStepComponent,
  EmotionalAcceptanceComponent,
  GatheredLoreComponent,
  PreciseDisciplineComponent,
  WanderingReverieComponent],
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
    WarpriestComponent,
    AnimalDruidComponent,
    FlameDruidComponent,
    LeafDruidComponent,
    StoneDruidComponent,
    StormDruidComponent,
    WaveDruidComponent,
    WildDruidComponent,
    DrifterComponent,
    PistoleroComponent,
    SniperComponent,
    SpellshotComponent,
    TriggerbrandComponent,
    VanguardComponent,
    ArmorInnovationComponent,
    ConstructInnovationComponent,
    WeaponInnovationComponent,
    AlchemicalSciencesComponent,
    EmpiricismComponent,
    ForensicMedicineComponent,
    InterrogationComponent,
    InexorableIronComponent,
    LaughingShadowComponent,
    SparklingTargeComponent,
    StarlitSpanComponent,
    TwistingTreeComponent,
    AncestorsComponent,
    AshComponent,
    BattleComponent,
    BonesComponent,
    CosmosComponent,
    FlamesComponent,
    LifeComponent,
    LoreComponent,
    TempestComponent,
    TimeComponent,
    DistantGraspComponent,
    InfiniteEyeComponent,
    OscillatingWaveComponent,
    SilentWhisperComponent,
    TangibleDreamComponent,
    UnboundStepComponent,
    EmotionalAcceptanceComponent,
    GatheredLoreComponent,
    PreciseDisciplineComponent,
    WanderingReverieComponent]
})
export class SharedModule { }
