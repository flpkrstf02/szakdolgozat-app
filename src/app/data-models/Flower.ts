import { CroppedImage } from "./CroppedImage";

export interface Flower {
    id: number;
    url: Int8Array;
    override: boolean;
    croppedImage: CroppedImage[];
}