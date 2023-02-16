import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType : EnergyType = 'stamina';
  private static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.archetypeCount;
  }
}

export default Warrior;