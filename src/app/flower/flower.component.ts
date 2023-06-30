import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Flower } from '../services/data.service';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowerComponent {
  private platform = inject(Platform);
  @Input() flower?: Flower;
  isIos() {
    return this.platform.is('ios')
  }
}
