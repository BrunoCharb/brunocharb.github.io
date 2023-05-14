import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsHomePageRoutingModule } from './skills-home-routing.module';

import { SkillsHomePage } from './skills-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsHomePageRoutingModule
  ],
  declarations: [SkillsHomePage]
})
export class SkillsHomePageModule {}
