import { Payload } from "./payload";
import { Stage } from "./stage";

export class Rocket {
    payload?: Payload;
    stages?: Array<Stage>;
}