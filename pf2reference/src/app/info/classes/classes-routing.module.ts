import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesPage } from './classes.page';

const routes: Routes = [
  {
    path: '',
    component: ClassesPage
  },
  {
    path: 'class-details',
    loadChildren: () => import('./class-details/class-details.module').then( m => m.ClassDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesPageRoutingModule {}
