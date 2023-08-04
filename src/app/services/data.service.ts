import { Injectable } from '@angular/core';

export interface Flower {
  id: number;
  url: string;
  override: boolean;
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
      url: 'assets/mocks/img/full/carnations_00.jpg',
      override: true,
      croppedImage: [
        {
          id: 0,
          url: 'assets/mocks/img/cropped/flower_00.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: 'assets/mocks/img/cropped/flower_01.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: 'assets/mocks/img/cropped/flower_02.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: 'assets/mocks/img/cropped/flower_03.jpg',
          prediction: Stage.FOURTH,
        },
      ],
    },
    {
      id: 1,
      url: 'assets/mocks/img/full/carnations_01.jpg',
      override: true,
      croppedImage: [
        {
          id: 0,
          url: 'assets/mocks/img/cropped/flower_04.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: 'assets/mocks/img/cropped/flower_05.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: 'assets/mocks/img/cropped/flower_06.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: 'assets/mocks/img/cropped/flower_07.jpg',
          prediction: Stage.FOURTH,
        },
      ],
    },
    {
      id: 2,
      url: 'assets/mocks/img/full/carnations_02.jpg',
      override: false,
      croppedImage: [
        {
          id: 0,
          url: 'assets/mocks/img/cropped/flower_08.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: 'assets/mocks/img/cropped/flower_09.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: 'assets/mocks/img/cropped/flower_10.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: 'assets/mocks/img/cropped/flower_11.jpg',
          prediction: Stage.FOURTH,
        },
      ],
    },
    {
      id: 3,
      url: 'assets/mocks/img/full/carnations_03.jpg',
      override: true,
      croppedImage: [
        {
          id: 0,
          url: 'assets/mocks/img/cropped/flower_12.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: 'assets/mocks/img/cropped/flower_13.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: 'assets/mocks/img/cropped/flower_14.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: 'assets/mocks/img/cropped/flower_15.jpg',
          prediction: Stage.FOURTH,
        },
      ],
    },
    {
      id: 4,
      url: 'assets/mocks/img/full/carnations_04.jpg',
      override: false,
      croppedImage: [
        {
          id: 0,
          url: 'assets/mocks/img/cropped/flower_16.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: 'assets/mocks/img/cropped/flower_17.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: 'assets/mocks/img/cropped/flower_18.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: 'assets/mocks/img/cropped/flower_19.jpg',
          prediction: Stage.FOURTH,
        },
      ],
    },
    {
      id: 5,
      url: 'assets/mocks/img/full/carnations_05.jpg',
      override: false,
      croppedImage: [
        {
          id: 0,
          url: 'assets/mocks/img/cropped/flower_20.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: 'assets/mocks/img/cropped/flower_21.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: 'assets/mocks/img/cropped/flower_22.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: 'assets/mocks/img/cropped/flower_23.jpg',
          prediction: Stage.FOURTH,
        },
      ],
    },
    {
      id: 6,
      url: 'assets/mocks/img/full/carnations_06.jpg',
      override: false,
      croppedImage: [
        {
          id: 0,
          url: 'assets/mocks/img/cropped/flower_24.jpg',
          prediction: Stage.FIRST,
        },
        {
          id: 1,
          url: 'assets/mocks/img/cropped/flower_25.jpg',
          prediction: Stage.SECOND,
        },
        {
          id: 2,
          url: 'assets/mocks/img/cropped/flower_26.jpg',
          prediction: Stage.THIRD,
        },
        {
          id: 3,
          url: 'assets/mocks/img/cropped/flower_27.jpg',
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
