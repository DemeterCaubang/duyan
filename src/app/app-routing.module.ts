import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./pages/community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('./pages/consultation/consultation.module').then( m => m.ConsultationPageModule)
  },
  {
    path: 'health-and-wellness',
    loadChildren: () => import('./pages/health-and-wellness/health-and-wellness.module').then( m => m.HealthAndWellnessPageModule)
  },
  {
    path: 'quote',
    loadChildren: () => import('./pages/quote/quote.module').then( m => m.QuotePageModule)
  },
  {
    path: 'webinars',
    loadChildren: () => import('./pages/webinars/webinars.module').then( m => m.WebinarsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
