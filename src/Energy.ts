export type EnergyType = 'mana' | 'stamina';

interface Energy {
  amount: number;
  type_: EnergyType;
}

export default Energy;