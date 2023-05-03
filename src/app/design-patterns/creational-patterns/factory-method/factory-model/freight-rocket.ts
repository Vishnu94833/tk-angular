import { Satellite } from "./satellite";
import { Stage } from "./stage";

export class FreightRocket {
    payload?: Satellite;
    stages?: Array<Stage>;
}