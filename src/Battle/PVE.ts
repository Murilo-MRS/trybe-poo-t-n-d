import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    playerOne: Fighter,
    private monster: (Monster | SimpleFighter)[],
  ) {
    super(playerOne);
  }

  public fight(): number {
    for (let index = 0; index < this.monster.length; index += 1) {
      this.player.attack(this.monster[index]);
      this.monster[index].attack(this.player);
    }
    return super.fight();
  }
}

export default PVE;