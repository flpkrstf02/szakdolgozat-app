import { Stage } from "./Stage";

export interface CroppedImage {
    id: number;
    url: Int8Array;
    prediction: Stage;
}