const express = require('express');
import * as mongoose from 'mongoose';

// Schemas
import { monsterSchema } from './models/Monster';

// Setup database connection and models
mongoose.connect('mongodb://localhost/monsters');
const db = mongoose.connection;
db.on('error', (err) => {
  console.log(err);
});

db.model('Monster', monsterSchema);

// Initialize app and routes
const app = express();

app.get('/', async (req, res) => {
  const monsters = await db.models.Monster.find();
  res.send(monsters);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
