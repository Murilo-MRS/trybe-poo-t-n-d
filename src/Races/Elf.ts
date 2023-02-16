import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static raceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.raceCount += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.raceCount;
  }
}

export default Elf;