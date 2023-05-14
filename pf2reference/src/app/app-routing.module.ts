import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./info/classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'class-details/:id',
    loadChildren: () => import('./info/classes/class-details/class-details.module').then(m => m.ClassDetailsPageModule)
  },
  {
    path: 'ancestries/:segment',
    loadChildren: () => import('./info/ancestries/ancestries/ancestries.module').then( m => m.AncestriesPageModule)
  },
  {
    path: 'ancestry-details/:id',
    loadChildren: () => import('./info/ancestries/ancestry-details/ancestry-details.module').then( m => m.AncestryDetailsPageModule)
  },
  {
    path: 'heritage-details/:id',
    loadChildren: () => import('./info/ancestries/heritage-details/heritage-details.module').then( m => m.HeritageDetailsPageModule)
  },
  {
    path: 'backgrounds',
    loadChildren: () => import('./info/backgrounds/backgrounds/backgrounds.module').then( m => m.BackgroundsPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./info/skills/skills-home/skills-home.module').then( m => m.SkillsHomePageModule)
  },
  {
    path: 'skill-details/:skill',
    loadChildren: () => import('./info/skills/skill-details/skill-details.module').then( m => m.SkillDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
