import * as mongoose from 'mongoose';
import db from '../db';
import Monster from '../interfaces/Monster';
import BloodSucker from '../interfaces/BloodSucker';

const vampireModel = db.model('Vampire', new db.Schema({}, { strict: false }))

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

  async save(): Promise<mongoose.Document> {
    const document = new vampireModel({
      hunger: this.hunger,
    });

    return document.save();
  }
}
