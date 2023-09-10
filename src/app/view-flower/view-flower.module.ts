import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewFlowerPage } from './view-flower.component';

import { IonicModule } from '@ionic/angular';

import { ViewFlowerPageRoutingModule } from './view-flower-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFlowerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewFlowerPage]
})
export class ViewFlowerPageModule {}
