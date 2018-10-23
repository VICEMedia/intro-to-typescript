import * as mongoose from 'mongoose';

export default interface Monster {
  name: string;
  hunger: number;
  save: () => Promise<mongoose.Document>;
}
