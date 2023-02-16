abstract class Race {
  private _name: string;  
  private _dexterity: number;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
  
  public get name() : string {
    return this._name;
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }

  abstract get maxLifePoints() : number;

  public static createdRacesInstances() : number {
    throw new Error('Not implemented');
  }
}

export default Race;