import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, Flower } from '../services/data.service';

@Component({
  selector: 'app-view-flower',
  templateUrl: './view-flower.page.html',
  styleUrls: ['./view-flower.page.scss'],
})
export class ViewFlowerPage implements OnInit {
  public flower!: Flower;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.flower = this.data.getFlowerById(parseInt(id, 10));
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Carnation' : '';
  }
}
