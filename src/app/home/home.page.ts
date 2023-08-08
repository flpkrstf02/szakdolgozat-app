import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Flower } from '../data-models/Flower';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getFlowers(): Flower[] {
    return this.data.getFlowers();
  }
}
