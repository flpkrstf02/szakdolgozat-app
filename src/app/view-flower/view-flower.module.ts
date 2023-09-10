import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewFlowerComponent } from './view-flower.component';

import { IonicModule } from '@ionic/angular';

import { ViewFlowerComponentRoutingModule } from './view-flower-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFlowerComponentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewFlowerComponent]
})
export class ViewFlowerPageModule {}
