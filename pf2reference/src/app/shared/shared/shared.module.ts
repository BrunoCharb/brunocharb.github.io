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
import {BabaYagaComponent} from '../../info/subclasses/witch/baba-yaga/baba-yaga.component';
import {CursePatronComponent} from '../../info/subclasses/witch/curse-patron/curse-patron.component';
import {FatePatronComponent} from '../../info/subclasses/witch/fate-patron/fate-patron.component';
import {FervorPatronComponent} from '../../info/subclasses/witch/fervor-patron/fervor-patron.component';
import {MosquitoWitchComponent} from '../../info/subclasses/witch/mosquito-witch/mosquito-witch.component';
import {NightPatronComponent} from '../../info/subclasses/witch/night-patron/night-patron.component';
import {PactsPatronComponent} from '../../info/subclasses/witch/pacts-patron/pacts-patron.component';
import {RunePatronComponent} from '../../info/subclasses/witch/rune-patron/rune-patron.component';
import {WildPatronComponent} from '../../info/subclasses/witch/wild-patron/wild-patron.component';
import {WinterPatronComponent} from '../../info/subclasses/witch/winter-patron/winter-patron.component';
import {ImprovedFamiliarComponent} from '../../info/subclasses/wizard/improved-familiar/improved-familiar.component';
import {MetamagicalExperimentationComponent} from '../../info/subclasses/wizard/metamagical-experimentation/metamagical-experimentation.component';
import {SpellBlendingComponent} from '../../info/subclasses/wizard/spell-blending/spell-blending.component';
import {SpellSubstitutionComponent} from '../../info/subclasses/wizard/spell-substitution/spell-substitution.component';
import {StaffNexusComponent} from '../../info/subclasses/wizard/staff-nexus/staff-nexus.component';
import {ClassFeatComponent} from '../../info/feats/class-feat/class-feat.component';
import {AlchemistFeaturesComponent} from '../../info/classes/class-features/alchemist-features/alchemist-features.component';
import {
  BarbarianFeaturesComponent
} from '../../info/classes/class-features/barbarian-features/barbarian-features.component';
import {BardFeaturesComponent} from '../../info/classes/class-features/bard-features/bard-features.component';
import {
  ChampionFeaturesComponent
} from '../../info/classes/class-features/champion-features/champion-features.component';
import {ClericFeaturesComponent} from '../../info/classes/class-features/cleric-features/cleric-features.component';
import {DruidFeaturesComponent} from '../../info/classes/class-features/druid-features/druid-features.component';
import {FighterFeaturesComponent} from '../../info/classes/class-features/fighter-features/fighter-features.component';
import {
  GunslingerFeaturesComponent
} from '../../info/classes/class-features/gunslinger-features/gunslinger-features.component';
import {
  InventorFeaturesComponent
} from '../../info/classes/class-features/inventor-features/inventor-features.component';
import {
  InvestigatorFeaturesComponent
} from '../../info/classes/class-features/investigator-features/investigator-features.component';
import {MagusFeaturesComponent} from '../../info/classes/class-features/magus-features/magus-features.component';
import {MonkFeaturesComponent} from '../../info/classes/class-features/monk-features/monk-features.component';
import {OracleFeaturesComponent} from '../../info/classes/class-features/oracle-features/oracle-features.component';
import {PsychicFeaturesComponent} from '../../info/classes/class-features/psychic-features/psychic-features.component';
import {RangerFeaturesComponent} from '../../info/classes/class-features/ranger-features/ranger-features.component';
import {RogueFeaturesComponent} from '../../info/classes/class-features/rogue-features/rogue-features.component';
import {
  SorcererFeaturesComponent
} from '../../info/classes/class-features/sorcerer-features/sorcerer-features.component';
import {
  SummonerFeaturesComponent
} from '../../info/classes/class-features/summoner-features/summoner-features.component';
import {
  SwashbucklerFeaturesComponent
} from '../../info/classes/class-features/swashbuckler-features/swashbuckler-features.component';
import {
  ThaumaturgeFeaturesComponent
} from '../../info/classes/class-features/thaumaturge-features/thaumaturge-features.component';
import {WitchFeaturesComponent} from '../../info/classes/class-features/witch-features/witch-features.component';
import {WizardFeaturesComponent} from '../../info/classes/class-features/wizard-features/wizard-features.component';
import {AngelEidolonComponent} from '../../info/companions/eidolons/angel-eidolon/angel-eidolon.component';
import {AngerEidolonComponent} from '../../info/companions/eidolons/anger-eidolon/anger-eidolon.component';
import {BeastEidolonComponent} from '../../info/companions/eidolons/beast-eidolon/beast-eidolon.component';
import {ConstructEidolonComponent} from '../../info/companions/eidolons/construct-eidolon/construct-eidolon.component';
import {DemonEidolonComponent} from '../../info/companions/eidolons/demon-eidolon/demon-eidolon.component';
import {DevotionEidolonComponent} from '../../info/companions/eidolons/devotion-eidolon/devotion-eidolon.component';
import {DragonEidolonComponent} from '../../info/companions/eidolons/dragon-eidolon/dragon-eidolon.component';
import {FeyEidolonComponent} from '../../info/companions/eidolons/fey-eidolon/fey-eidolon.component';
import {PlantEidolonComponent} from '../../info/companions/eidolons/plant-eidolon/plant-eidolon.component';
import {
  PsychopompEidolonComponent
} from '../../info/companions/eidolons/psychopomp-eidolon/psychopomp-eidolon.component';
import {UndeadEidolonComponent} from '../../info/companions/eidolons/undead-eidolon/undead-eidolon.component';
import {AnadiHeritagesComponent} from '../../info/ancestries/heritages/anadi-heritages/anadi-heritages.component';
import {AndroidHeritagesComponent} from '../../info/ancestries/heritages/android-heritages/android-heritages.component';
import {
  AutomatonHeritagesComponent
} from '../../info/ancestries/heritages/automaton-heritages/automaton-heritages.component';
import {
  AzarketiHeritagesComponent
} from '../../info/ancestries/heritages/azarketi-heritages/azarketi-heritages.component';
import {CatfolkHeritagesComponent} from '../../info/ancestries/heritages/catfolk-heritages/catfolk-heritages.component';
import {ConrasuHeritagesComponent} from '../../info/ancestries/heritages/conrasu-heritages/conrasu-heritages.component';
import {DwarfHeritagesComponent} from '../../info/ancestries/heritages/dwarf-heritages/dwarf-heritages.component';
import {ElfHeritagesComponent} from '../../info/ancestries/heritages/elf-heritages/elf-heritages.component';
import {
  FetchlingHeritagesComponent
} from '../../info/ancestries/heritages/fetchling-heritages/fetchling-heritages.component';
import {
  FleshwarpHeritagesComponent
} from '../../info/ancestries/heritages/fleshwarp-heritages/fleshwarp-heritages.component';
import {GhoranHeritagesComponent} from '../../info/ancestries/heritages/ghoran-heritages/ghoran-heritages.component';
import {GnollHeritagesComponent} from '../../info/ancestries/heritages/gnoll-heritages/gnoll-heritages.component';
import {GnomeHeritagesComponent} from '../../info/ancestries/heritages/gnome-heritages/gnome-heritages.component';
import {GoblinHeritagesComponent} from '../../info/ancestries/heritages/goblin-heritages/goblin-heritages.component';
import {GolomaHeritagesComponent} from '../../info/ancestries/heritages/goloma-heritages/goloma-heritages.component';
import {GrippliHeritagesComponent} from '../../info/ancestries/heritages/grippli-heritages/grippli-heritages.component';
import {
  HalflingHeritagesComponent
} from '../../info/ancestries/heritages/halfling-heritages/halfling-heritages.component';
import {
  HobgoblinHeritagesComponent
} from '../../info/ancestries/heritages/hobgoblin-heritages/hobgoblin-heritages.component';
import {HumanHeritagesComponent} from '../../info/ancestries/heritages/human-heritages/human-heritages.component';
import {
  KashrishiHeritagesComponent
} from '../../info/ancestries/heritages/kashrishi-heritages/kashrishi-heritages.component';
import {KitsuneHeritagesComponent} from '../../info/ancestries/heritages/kitsune-heritages/kitsune-heritages.component';
import {KoboldHeritagesComponent} from '../../info/ancestries/heritages/kobold-heritages/kobold-heritages.component';
import {LeshyHeritagesComponent} from '../../info/ancestries/heritages/leshy-heritages/leshy-heritages.component';
import {
  LizardfolkHeritagesComponent
} from '../../info/ancestries/heritages/lizardfolk-heritages/lizardfolk-heritages.component';
import {NagajiHeritagesComponent} from '../../info/ancestries/heritages/nagaji-heritages/nagaji-heritages.component';
import {OrcHeritagesComponent} from '../../info/ancestries/heritages/orc-heritages/orc-heritages.component';
import {PoppetHeritagesComponent} from '../../info/ancestries/heritages/poppet-heritages/poppet-heritages.component';
import {RatfolkHeritagesComponent} from '../../info/ancestries/heritages/ratfolk-heritages/ratfolk-heritages.component';
import {ShiskHeritagesComponent} from '../../info/ancestries/heritages/shisk-heritages/shisk-heritages.component';
import {ShoonyHeritagesComponent} from '../../info/ancestries/heritages/shoony-heritages/shoony-heritages.component';
import {
  SkeletonHeritagesComponent
} from '../../info/ancestries/heritages/skeleton-heritages/skeleton-heritages.component';
import {SpriteHeritagesComponent} from '../../info/ancestries/heritages/sprite-heritages/sprite-heritages.component';
import {StrixHeritagesComponent} from '../../info/ancestries/heritages/strix-heritages/strix-heritages.component';
import {TenguHeritagesComponent} from '../../info/ancestries/heritages/tengu-heritages/tengu-heritages.component';
import {VanaraHeritagesComponent} from '../../info/ancestries/heritages/vanara-heritages/vanara-heritages.component';
import {
  VishkanyaHeritagesComponent
} from '../../info/ancestries/heritages/vishkanya-heritages/vishkanya-heritages.component';
import {RouterLink} from "@angular/router";
import { GeneralSkillsComponent } from 'src/app/info/skills/components/general-skills/general-skills.component';

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
  WeaponComponent,
  BabaYagaComponent,
  CursePatronComponent,
  FatePatronComponent,
  FervorPatronComponent,
  MosquitoWitchComponent,
  NightPatronComponent,
  PactsPatronComponent,
  RunePatronComponent,
  WildPatronComponent,
  WinterPatronComponent,
  ImprovedFamiliarComponent,
  MetamagicalExperimentationComponent,
  SpellBlendingComponent,
  SpellSubstitutionComponent,
  StaffNexusComponent,
  ClassFeatComponent,
  AlchemistFeaturesComponent,
  BarbarianFeaturesComponent,
  BardFeaturesComponent,
  ChampionFeaturesComponent,
  ClericFeaturesComponent,
  DruidFeaturesComponent,
  FighterFeaturesComponent,
  GunslingerFeaturesComponent,
  InventorFeaturesComponent,
  InvestigatorFeaturesComponent,
  MagusFeaturesComponent,
  MonkFeaturesComponent,
  OracleFeaturesComponent,
  PsychicFeaturesComponent,
  RangerFeaturesComponent,
  RogueFeaturesComponent,
  SorcererFeaturesComponent,
  SummonerFeaturesComponent,
  SwashbucklerFeaturesComponent,
  ThaumaturgeFeaturesComponent,
  WitchFeaturesComponent,
  WizardFeaturesComponent,
  AngelEidolonComponent,
  AngerEidolonComponent,
  BeastEidolonComponent,
  ConstructEidolonComponent,
  DemonEidolonComponent,
  DevotionEidolonComponent,
  DragonEidolonComponent,
  FeyEidolonComponent,
  PlantEidolonComponent,
  PsychopompEidolonComponent,
  UndeadEidolonComponent,
  AnadiHeritagesComponent,
  AndroidHeritagesComponent,
  AutomatonHeritagesComponent,
  AzarketiHeritagesComponent,
  CatfolkHeritagesComponent,
  ConrasuHeritagesComponent,
  DwarfHeritagesComponent,
  ElfHeritagesComponent,
  FetchlingHeritagesComponent,
  FleshwarpHeritagesComponent,
  GhoranHeritagesComponent,
  GnollHeritagesComponent,
  GnomeHeritagesComponent,
  GoblinHeritagesComponent,
  GolomaHeritagesComponent,
  GrippliHeritagesComponent,
  HalflingHeritagesComponent,
  HobgoblinHeritagesComponent,
  HumanHeritagesComponent,
  KashrishiHeritagesComponent,
  KitsuneHeritagesComponent,
  KoboldHeritagesComponent,
  LeshyHeritagesComponent,
  LizardfolkHeritagesComponent,
  NagajiHeritagesComponent,
  OrcHeritagesComponent,
  PoppetHeritagesComponent,
  RatfolkHeritagesComponent,
  ShiskHeritagesComponent,
  ShoonyHeritagesComponent,
  SkeletonHeritagesComponent,
  SpriteHeritagesComponent,
  StrixHeritagesComponent,
  TenguHeritagesComponent,
  VanaraHeritagesComponent,
  VishkanyaHeritagesComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterLink
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
    WeaponComponent,
    BabaYagaComponent,
    CursePatronComponent,
    FatePatronComponent,
    FervorPatronComponent,
    MosquitoWitchComponent,
    NightPatronComponent,
    PactsPatronComponent,
    RunePatronComponent,
    WildPatronComponent,
    WinterPatronComponent,
    ImprovedFamiliarComponent,
    MetamagicalExperimentationComponent,
    SpellBlendingComponent,
    SpellSubstitutionComponent,
    StaffNexusComponent,
    ClassFeatComponent,
    AlchemistFeaturesComponent,
    BarbarianFeaturesComponent,
    BardFeaturesComponent,
    ChampionFeaturesComponent,
    ClericFeaturesComponent,
    DruidFeaturesComponent,
    FighterFeaturesComponent,
    GunslingerFeaturesComponent,
    InventorFeaturesComponent,
    InvestigatorFeaturesComponent,
    MagusFeaturesComponent,
    MonkFeaturesComponent,
    OracleFeaturesComponent,
    PsychicFeaturesComponent,
    RangerFeaturesComponent,
    RogueFeaturesComponent,
    SorcererFeaturesComponent,
    SummonerFeaturesComponent,
    SwashbucklerFeaturesComponent,
    ThaumaturgeFeaturesComponent,
    WitchFeaturesComponent,
    WizardFeaturesComponent,
    AngelEidolonComponent,
    AngerEidolonComponent,
    BeastEidolonComponent,
    ConstructEidolonComponent,
    DemonEidolonComponent,
    DevotionEidolonComponent,
    DragonEidolonComponent,
    FeyEidolonComponent,
    PlantEidolonComponent,
    PsychopompEidolonComponent,
    UndeadEidolonComponent,
    AnadiHeritagesComponent,
    AndroidHeritagesComponent,
    AutomatonHeritagesComponent,
    AzarketiHeritagesComponent,
    CatfolkHeritagesComponent,
    ConrasuHeritagesComponent,
    DwarfHeritagesComponent,
    ElfHeritagesComponent,
    FetchlingHeritagesComponent,
    FleshwarpHeritagesComponent,
    GhoranHeritagesComponent,
    GnollHeritagesComponent,
    GnomeHeritagesComponent,
    GoblinHeritagesComponent,
    GolomaHeritagesComponent,
    GrippliHeritagesComponent,
    HalflingHeritagesComponent,
    HobgoblinHeritagesComponent,
    HumanHeritagesComponent,
    KashrishiHeritagesComponent,
    KitsuneHeritagesComponent,
    KoboldHeritagesComponent,
    LeshyHeritagesComponent,
    LizardfolkHeritagesComponent,
    NagajiHeritagesComponent,
    OrcHeritagesComponent,
    PoppetHeritagesComponent,
    RatfolkHeritagesComponent,
    ShiskHeritagesComponent,
    ShoonyHeritagesComponent,
    SkeletonHeritagesComponent,
    SpriteHeritagesComponent,
    StrixHeritagesComponent,
    TenguHeritagesComponent,
    VanaraHeritagesComponent,
    VishkanyaHeritagesComponent]
})
export class SharedModule { }
