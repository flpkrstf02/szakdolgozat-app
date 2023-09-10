import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Flower } from '../data-models/Flower';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  private data = inject(DataService);
  public flowers!: Flower[];
  constructor() {
    this.getFlowers();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getFlowers(): Flower[] {
    this.data.getFlowers().subscribe((response: Flower[]) => {
      this.flowers = response;
    });
    return this.flowers;
  }
}
