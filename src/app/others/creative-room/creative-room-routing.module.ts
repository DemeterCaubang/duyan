import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreativeRoomPage } from './creative-room.page';

const routes: Routes = [
  {
    path: '',
    component: CreativeRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreativeRoomPageRoutingModule {}
