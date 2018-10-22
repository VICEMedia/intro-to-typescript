/*
  Enums are included in the transpiled JavaScript. They are helpful when you
  need to iterate over enum keys or when you need to reference an enum key
  at runtime
*/
enum Power {
  Transform = 'assume multiple forms',
  SuckBlood = 'suck the life juice out of a victim',
}

/*
  Types are removed from the code at compile time. They are helpful when you
  need to perform your type check at compile time and not at runtime
*/
type Media = 'novel' | 'film';

interface Monster {
  name: string;
  year: number;
  media: Media;
  powers: Power[];
  listPowers: () => string;
}

class MovieMonster implements Monster {
  name: string;
  year: number;
  media: Media = 'film';
  powers: Power[];

  constructor(name: string, year: number, powers: Power[]) {
    this.name = name;
    this.year = year;
    this.powers = powers;
  }

  listPowers() {
    const { name, powers } = this;
    return `${name} can ${powers.join(', ')}`;
  }
}

const mogwai = new MovieMonster(
  'Gizmo',
  1984,
  [Power.Transform]
);

class NovelMonster implements Monster {
  name: string;
  year: number;
  media: Media = 'novel';
  powers: Power[];

  constructor(name: string, year: number, powers: Power[]) {
    this.name = name;
    this.year = year;
    this.powers = powers;
  }

  listPowers() {
    const { name, powers } = this;
    return `${name} can ${powers.join(', ')}`;
  }
}

const vampire = new NovelMonster(
  'Dracula',
  1897,
  [Power.Transform, Power.SuckBlood]
)

console.log(vampire.listPowers());
