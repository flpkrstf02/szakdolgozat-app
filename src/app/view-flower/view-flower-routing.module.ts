import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFlowerComponent } from './view-flower.component';

const routes: Routes = [
  {
    path: '',
    component: ViewFlowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFlowerComponentRoutingModule {}
