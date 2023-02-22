import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(fighterOne: Fighter, private fighterTwo: Fighter) {
    super(fighterOne);
  }

  public fight(): number {
    const battle = true;
    while (battle) {
      this.player.attack(this.fighterTwo);
      if (this.player.lifePoints === -1) break;
      this.fighterTwo.attack(this.player);
      if (this.fighterTwo.lifePoints === -1) break;
    }
    return super.fight();
  }
}

export default PVP;