import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.raceCount += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.raceCount;
  }
}

export default Halfling;