import { CroppedImage } from "./CroppedImage";

export interface Flower {
    id: number;
    url: string;
    override: boolean;
    croppedImage: CroppedImage[];
}