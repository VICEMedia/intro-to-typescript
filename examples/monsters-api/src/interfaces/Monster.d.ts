import * as mongoose from 'mongoose';

export default interface Monster {
  name: string;
  save: (db: mongoose.Connection, args: any) => Promise<mongoose.Document>;
}
