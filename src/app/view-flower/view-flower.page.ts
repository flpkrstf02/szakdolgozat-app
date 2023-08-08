import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CroppedForm } from '../data-models/CroppedForm';
import { Flower } from '../data-models/Flower';
import { Stage } from '../data-models/Stage';

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

  public form!: FormGroup;
  public stages: Stage[] = [Stage.FIRST, Stage.SECOND, Stage.THIRD, Stage.FOURTH];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.flower = this.data.getFlowerById(parseInt(id, 10));
    this.initForm();
  }

  public initForm() {
    this.form = this.fb.group({
      croppedItem: this.fb.array([])
    })

    this.flower.croppedImage.forEach(image => {
      const imageGroup = this.fb.group({
        id: [image.id],
        url: [image.url],
        prediction: [image.prediction]
      });
      this.croppedItem.push(imageGroup);
    });
  }

  public radioGroupChange(event: any, item: any) {
    item.controls.prediction.value = event.detail['value'];
  }

  get croppedItem() {
    return this.form.controls["croppedItem"] as FormArray;
  }
  
  public getUrl(item: any){
    return item.getRawValue()['url'];
  }

  public getPrediction(item: any){
    return item.getRawValue()['prediction'];
  }

  public submit() {
    const formRawValue = this.form.getRawValue();
    this.flower.croppedImage.forEach(image => {
      if (Array.isArray(formRawValue['croppedItem'])) {
        image.prediction = formRawValue['croppedItem'].find(value => value['id'] === image.id)['prediction'];
      }
    })
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Carnation' : '';
  }
}
