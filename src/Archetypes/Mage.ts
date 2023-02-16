import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType : EnergyType = 'mana';
  private static archetypeCount = 0;

  constructor(name: string) {
    super(name);
    Mage.archetypeCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.archetypeCount;
  }
}

export default Mage;