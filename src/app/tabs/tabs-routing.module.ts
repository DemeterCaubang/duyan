import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'HomePage',
      },
      {
        path: 'community',
        redirectTo: 'community',
        pathMatch: 'CommunityPage',
      },
      {
        path: 'consultation',
        redirectTo: 'consultation',
        pathMatch: 'ConsultationPage',
      },
      {
        path: 'health-and-wellness',
        redirectTo: 'health-and-wellness',
        pathMatch: 'HealthAndWellnessPage',
      },
      {
        path: 'quote',
        redirectTo: 'quote',
        pathMatch: 'QuotePage',
      },
      {
        path: 'webinars',
        redirectTo: 'webinars',
        pathMatch: 'WebinarsPage',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
