import { Payload } from './payload';
import { RocketFactory } from './rocket-factory';
import { Stage } from './stage';

export class FreightRocketFactory extends RocketFactory {
  createPayload(): Payload {
    return new Payload(0);
  }
  createStages(): Stage[] {
    let engine = new Engine(1000);
    let stage = new Stage([engine]);
    return [stage];
  }
 
}
