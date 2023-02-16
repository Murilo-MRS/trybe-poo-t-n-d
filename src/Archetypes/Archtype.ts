import { EnergyType } from '../Energy';

abstract class Archtype {
  private _name: string;  
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }
  
  public get name() : string {
    return this._name;
  }
  
  public get special() : number {
    return this._special;
  }
  
  public get cost() : number {
    return this._cost;
  }

  abstract get energyType() : EnergyType;

  public static createdArchetypeInstances() : number {
    throw new Error('Not implemented');
  }
}

export default Archtype;