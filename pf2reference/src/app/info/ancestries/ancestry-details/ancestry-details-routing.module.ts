import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AncestryDetailsPage } from './ancestry-details.page';

const routes: Routes = [
  {
    path: '',
    component: AncestryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AncestryDetailsPageRoutingModule {}
