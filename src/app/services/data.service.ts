import { Injectable } from '@angular/core';

export interface Flower {
  id: number;
  url: string;
  croppedImage: CroppedImage[];
}

export interface CroppedImage {
  id: number;
  url: string;
  prediction: Stage;
}

export enum Stage {
  FIRST = "stage1",
  SECOND = "stage2",
  THIRD = "stage3",
  FOURTH = "stage4",
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public flowers: Flower[] = [
    {
      id: 0,
      url: '../mocks/img/full/carnations_00.jpg',
      croppedImage: [
        {
          id: 0,
          url: '../mocks/img/cropped/flower_00.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: '../mocks/img/cropped/flower_01.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: '../mocks/img/cropped/flower_02.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: '../mocks/img/cropped/flower_03.jpg',
          prediction: Stage.FOURTH,
        },
      ],
    },

  ];

  constructor() { }

  public getFlowers(): Flower[] {
    return this.flowers;
  }

  public getFlowerById(id: number): Flower {
    return this.flowers[id];
  }
}
