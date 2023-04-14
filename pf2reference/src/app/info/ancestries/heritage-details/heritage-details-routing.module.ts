import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeritageDetailsPage } from './heritage-details.page';

const routes: Routes = [
  {
    path: '',
    component: HeritageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeritageDetailsPageRoutingModule {}
