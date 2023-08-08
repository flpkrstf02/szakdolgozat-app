import { Stage } from "./Stage";

export interface CroppedImage {
    id: number;
    url: string;
    prediction: Stage;
}