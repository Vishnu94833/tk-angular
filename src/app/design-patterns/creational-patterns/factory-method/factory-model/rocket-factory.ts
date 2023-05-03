import { Payload } from './payload';
import { Stage } from './stage';

export abstract class RocketFactory {
  abstract createRocket(): RocketFactory;
  abstract createStages(): Array<Stage>;
  abstract createPayload(): Payload;
}
