import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreedomWallPageRoutingModule } from './freedom-wall-routing.module';

import { FreedomWallPage } from './freedom-wall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreedomWallPageRoutingModule
  ],
  declarations: [FreedomWallPage]
})
export class FreedomWallPageModule {}
