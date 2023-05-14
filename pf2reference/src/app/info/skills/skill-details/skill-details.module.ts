import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillDetailsPageRoutingModule } from './skill-details-routing.module';

import { SkillDetailsPage } from './skill-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillDetailsPageRoutingModule
  ],
  declarations: [SkillDetailsPage]
})
export class SkillDetailsPageModule {}
