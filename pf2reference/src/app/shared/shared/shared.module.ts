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
import {FlurryComponent} from '../../info/subclasses/ranger/flurry/flurry.component';
import {OutwitComponent} from '../../info/subclasses/ranger/outwit/outwit.component';
import {PrecisionComponent} from '../../info/subclasses/ranger/precision/precision.component';
import {EldritchTricksterComponent} from '../../info/subclasses/rogue/eldritch-trickster/eldritch-trickster.component';
import {MastermindComponent} from '../../info/subclasses/rogue/mastermind/mastermind.component';
import {RuffianComponent} from '../../info/subclasses/rogue/ruffian/ruffian.component';
import {ScoundrelComponent} from '../../info/subclasses/rogue/scoundrel/scoundrel.component';
import {ThiefComponent} from '../../info/subclasses/rogue/thief/thief.component';
import {AberrantBloodlineComponent} from '../../info/subclasses/sorcerer/aberrant-bloodline/aberrant-bloodline.component';
import {AngelicBloodlineComponent} from '../../info/subclasses/sorcerer/angelic-bloodline/angelic-bloodline.component';
import {DemonicBloodlineComponent} from '../../info/subclasses/sorcerer/demonic-bloodline/demonic-bloodline.component';
import {DiabolicBloodlineComponent} from '../../info/subclasses/sorcerer/diabolic-bloodline/diabolic-bloodline.component';
import {DraconicBloodlineComponent} from '../../info/subclasses/sorcerer/draconic-bloodline/draconic-bloodline.component';
import {ElementalBloodlineComponent} from '../../info/subclasses/sorcerer/elemental-bloodline/elemental-bloodline.component';
import {FeyBloodlineComponent} from '../../info/subclasses/sorcerer/fey-bloodline/fey-bloodline.component';
import {GenieBloodlineComponent} from '../../info/subclasses/sorcerer/genie-bloodline/genie-bloodline.component';
import {HagBloodlineComponent} from '../../info/subclasses/sorcerer/hag-bloodline/hag-bloodline.component';
import {ImperialBloodlineComponent} from '../../info/subclasses/sorcerer/imperial-bloodline/imperial-bloodline.component';
import {NymphBloodlineComponent} from '../../info/subclasses/sorcerer/nymph-bloodline/nymph-bloodline.component';
import {PhoenixBloodlineComponent} from '../../info/subclasses/sorcerer/phoenix-bloodline/phoenix-bloodline.component';
import {PsychopompBloodlineComponent} from '../../info/subclasses/sorcerer/psychopomp-bloodline/psychopomp-bloodline.component';
import {ShadowBloodlineComponent} from '../../info/subclasses/sorcerer/shadow-bloodline/shadow-bloodline.component';
import {UndeadBloodlineComponent} from '../../info/subclasses/sorcerer/undead-bloodline/undead-bloodline.component';
import {WyrmblessedBloodlineComponent} from '../../info/subclasses/sorcerer/wyrmblessed-bloodline/wyrmblessed-bloodline.component';
import {BattledancerComponent} from '../../info/subclasses/swashbuckler/battledancer/battledancer.component';
import {BraggartComponent} from '../../info/subclasses/swashbuckler/braggart/braggart.component';
import {FencerComponent} from '../../info/subclasses/swashbuckler/fencer/fencer.component';
import {GymnastComponent} from '../../info/subclasses/swashbuckler/gymnast/gymnast.component';
import {WitComponent} from '../../info/subclasses/swashbuckler/wit/wit.component';
import {AmuletComponent} from '../../info/subclasses/thaumaturge/amulet/amulet.component';
import {BellComponent} from '../../info/subclasses/thaumaturge/bell/bell.component';
import {ChaliceComponent} from '../../info/subclasses/thaumaturge/chalice/chalice.component';
import {LanternComponent} from '../../info/subclasses/thaumaturge/lantern/lantern.component';
import {MirrorComponent} from '../../info/subclasses/thaumaturge/mirror/mirror.component';
import {RegaliaComponent} from '../../info/subclasses/thaumaturge/regalia/regalia.component';
import {TomeComponent} from '../../info/subclasses/thaumaturge/tome/tome.component';
import {WandComponent} from '../../info/subclasses/thaumaturge/wand/wand.component';
import {WeaponComponent} from '../../info/subclasses/thaumaturge/weapon/weapon.component';

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
  WanderingReverieComponent,
  FlurryComponent,
  PrecisionComponent,
  OutwitComponent,
  EldritchTricksterComponent,
  MastermindComponent,
  RuffianComponent,
  ScoundrelComponent,
  ThiefComponent,
  AberrantBloodlineComponent,
  AngelicBloodlineComponent,
  DemonicBloodlineComponent,
  DiabolicBloodlineComponent,
  DraconicBloodlineComponent,
  ElementalBloodlineComponent,
  FeyBloodlineComponent,
  GenieBloodlineComponent,
  HagBloodlineComponent,
  ImperialBloodlineComponent,
  NymphBloodlineComponent,
  PhoenixBloodlineComponent,
  PsychopompBloodlineComponent,
  ShadowBloodlineComponent,
  UndeadBloodlineComponent,
  WyrmblessedBloodlineComponent,
  BattledancerComponent,
  BraggartComponent,
  FencerComponent,
  GymnastComponent,
  WitComponent,
  AmuletComponent,
  BellComponent,
  ChaliceComponent,
  LanternComponent,
  MirrorComponent,
  RegaliaComponent,
  TomeComponent,
  WandComponent,
  WeaponComponent],
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
    WanderingReverieComponent,
    FlurryComponent,
    PrecisionComponent,
    OutwitComponent,
    EldritchTricksterComponent,
    MastermindComponent,
    RuffianComponent,
    ScoundrelComponent,
    ThiefComponent,
    AberrantBloodlineComponent,
    AngelicBloodlineComponent,
    DemonicBloodlineComponent,
    DiabolicBloodlineComponent,
    DraconicBloodlineComponent,
    ElementalBloodlineComponent,
    FeyBloodlineComponent,
    GenieBloodlineComponent,
    HagBloodlineComponent,
    ImperialBloodlineComponent,
    NymphBloodlineComponent,
    PhoenixBloodlineComponent,
    PsychopompBloodlineComponent,
    ShadowBloodlineComponent,
    UndeadBloodlineComponent,
    WyrmblessedBloodlineComponent,
    BattledancerComponent,
    BraggartComponent,
    FencerComponent,
    GymnastComponent,
    WitComponent,
    AmuletComponent,
    BellComponent,
    ChaliceComponent,
    LanternComponent,
    MirrorComponent,
    RegaliaComponent,
    TomeComponent,
    WandComponent,
    WeaponComponent]
})
export class SharedModule { }
