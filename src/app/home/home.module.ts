import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeComponentRoutingModule } from './home-routing.module';
import { FlowerComponentModule } from '../flower/flower.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowerComponentModule,
    HomeComponentRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
