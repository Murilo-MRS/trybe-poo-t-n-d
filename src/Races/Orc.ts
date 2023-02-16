import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.raceCount += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.raceCount;
  }
}

export default Orc;