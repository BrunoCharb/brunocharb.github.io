import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillDetailsPageRoutingModule } from './skill-details-routing.module';

import { SkillDetailsPage } from './skill-details.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { GeneralSkillsComponent } from '../components/general-skills/general-skills.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillDetailsPageRoutingModule,
    SharedModule    
  ],
  declarations: [SkillDetailsPage,
  GeneralSkillsComponent]
})
export class SkillDetailsPageModule {}
