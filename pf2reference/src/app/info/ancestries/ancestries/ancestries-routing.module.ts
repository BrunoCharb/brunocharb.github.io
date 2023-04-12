import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AncestriesPage } from './ancestries.page';

const routes: Routes = [
  {
    path: '',
    component: AncestriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AncestriesPageRoutingModule {}
