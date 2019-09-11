export class Pokemon {
  id: string;

  createdAt: string;
  updatedAt: string;

  name: string;
  // stats: Stats;
}

export class Stats {
  id: string;

  createdAt: string;
  updatedAt: string;

  evHp: string;
  evAttack: string;
  evDefense: string;
  evSpecialAttack: string;
  evSpecialDefense: string;
  evSpeed: string;
  form: string;
}
