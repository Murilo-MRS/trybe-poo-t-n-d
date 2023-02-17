import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  public get strength() : number {
    return this._strength;
  }
  
  public get lifePoints() : number {
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const damageDelt = this._strength;
    enemy.receiveDamage(damageDelt);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

export default Monster;