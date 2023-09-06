import { Stage } from "./Stage";

export interface CroppedImage {
    id: number;
    image: Int8Array;
    prediction: Stage;
}