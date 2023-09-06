import { CroppedImage } from "./CroppedImage";

export interface Flower {
    id: number;
    image: Int8Array;
    isOverrided: boolean;
    croppedImage: CroppedImage[];
}