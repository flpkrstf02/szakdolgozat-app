import { CroppedImage } from "./CroppedImage";

export interface Flower {
    id: number;
    image: string;
    isOverrided: boolean;
    croppedImage: CroppedImage[];
}