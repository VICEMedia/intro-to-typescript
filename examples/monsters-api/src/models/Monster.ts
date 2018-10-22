import * as mongoose from 'mongoose';

export const monsterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});
