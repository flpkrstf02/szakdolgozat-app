import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewFlowerPage } from './view-flower.page';

import { IonicModule } from '@ionic/angular';

import { ViewFlowerPageRoutingModule } from './view-flower-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFlowerPageRoutingModule
  ],
  declarations: [ViewFlowerPage]
})
export class ViewFlowerPageModule {}
