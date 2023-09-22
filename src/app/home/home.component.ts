import { Component, inject } from '@angular/core';
import { RangeCustomEvent, RefresherCustomEvent } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Flower } from '../data-models/Flower';
import { CaptureFrequency } from '../data-models/CaptureFrequency';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  private data = inject(DataService);
  public flowers!: Flower[];
  public captureFrequencies!: CaptureFrequency[];
  public captureFrequency: CaptureFrequency = {id: 0, hour: 0};
  constructor() {
    this.getFlowers();
    this.getCaptureFrequency();
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

  getCaptureFrequency(): CaptureFrequency[] {
    this.data.getCaptureFrequency().subscribe((response: CaptureFrequency[]) => {
      this.captureFrequencies = response;
      this.captureFrequency = this.captureFrequencies[0];
    });
    return this.captureFrequencies;
  }

  onIonChange(ev: Event) {
    this.captureFrequency.hour = ((ev as RangeCustomEvent).detail.value as number);
  }

  public submit() {
    this.data.updateCaptureFrequency(this.captureFrequency,this.captureFrequency.id).subscribe();
  }
}
