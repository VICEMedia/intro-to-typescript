import * as mongoose from 'mongoose';
import Monster from '../interfaces/Monster';
import BloodSucker from '../interfaces/BloodSucker';

export default class Vampire implements Monster, BloodSucker {
  name: string;
  hunger = 100;
  pintsConsumed = 0;

  constructor(name: string) {
    this.name = name;
  }

  drinkBlood(pints: number) {
    this.hunger -= pints * 10;
    this.pintsConsumed += pints;
  }

  async save(db: mongoose.Connection): Promise<mongoose.Document> {
    const model = await db.model('Vampire', new mongoose.Schema({}));
    const document = new model({
      hunger: this.hunger,
    });

    return document.save();
  }
}
