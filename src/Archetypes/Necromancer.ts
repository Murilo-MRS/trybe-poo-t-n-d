import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType : EnergyType = 'mana';
  private static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.archetypeCount;
  }
}

export default Necromancer;