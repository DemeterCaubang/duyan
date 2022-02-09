import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreedomWallPage } from './freedom-wall.page';

const routes: Routes = [
  {
    path: '',
    component: FreedomWallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreedomWallPageRoutingModule {}
