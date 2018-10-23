import * as mongoose from 'mongoose';

export default interface Monster {
  name: string;
  save: () => Promise<mongoose.Document>;
}
