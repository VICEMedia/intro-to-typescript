/*
  Enums are included in the transpiled JavaScript. They are helpful when you
  need to iterate over enum keys or when you need to reference an enum key
  at runtime
*/
enum Weakness {
  Sunlight = 'whithers in direct sunlight',
  Decapitation = 'must be attached to their noggin',
  Stake = 'is vulnerable to attacks from this pointed implement',
}

/*
  Types are removed from the code at compile time. They are helpful when you
  need to perform your type check at compile time and not at runtime
*/
type Media = 'novel' | 'film';

interface BloodSucker {
  pintsConsumed: number;
}

interface BrainEater {
  brainsEaten: number;
}

interface Undead {
  dateOfUndeath: Date;
}

interface Monster {
  name: string;
  hunger: number;
  mediaOfOrigin: Media;
  weaknesses: Weakness[];
  consume: (number) => void;
}

class Vampire implements Monster, Undead, BloodSucker {
  name: string;
  hunger = 100;
  pintsConsumed = 0;
  mediaOfOrigin: Media = 'novel';
  weaknesses = [Weakness.Sunlight, Weakness.Decapitation, Weakness.Stake];
  dateOfUndeath: Date;

  constructor(name: string, dateOfUndeath: Date) {
    this.name = name;
    this.dateOfUndeath = dateOfUndeath;
  }

  consume(pints: number) {
    this.hunger -= pints * 10;
    this.pintsConsumed -= pints;
  }
}

class Zombie implements Monster, Undead, BrainEater {
  name: string;
  hunger = 50;
  brainsEaten = 0;
  mediaOfOrigin: Media = 'film';
  weaknesses = [Weakness.Decapitation];
  dateOfUndeath: Date;

  constructor(name: string, dateOfUndeath: Date) {
    this.name = name;
    this.dateOfUndeath = dateOfUndeath;
  }

  consume(brains: number) {
    this.hunger -= brains * 25;
    this.brainsEaten += brains;
  }
}

const attack = (monster: Monster, weakness: Weakness) => {
  if (monster.weaknesses.includes(weakness)) {
    console.log(`${monster.name} ${weakness}`);
  } else {
    console.log(`${monster.name} survived the attack`);
  }
}

const dracula = new Vampire('Dracula', new Date('January 15 2018'));
attack(dracula, Weakness.Decapitation);
