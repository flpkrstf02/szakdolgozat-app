import { Stage } from "./Stage";

export interface CroppedImage {
    id: number;
    image: string;
    prediction: Stage;
}