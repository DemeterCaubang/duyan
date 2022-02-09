import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreativeRoomPageRoutingModule } from './creative-room-routing.module';

import { CreativeRoomPage } from './creative-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreativeRoomPageRoutingModule
  ],
  declarations: [CreativeRoomPage]
})
export class CreativeRoomPageModule {}
