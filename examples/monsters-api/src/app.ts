import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import Vampire from './models/Vampire';

// Setup database connection and models
mongoose.connect('mongodb://localhost/monsters');
const db = mongoose.connection;
db.on('error', (err) => {
  console.log(err);
});

// Initialize app and routes
const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', async (req, res) => {
});

app.post('/vampires', async (req, res) => {
  const vampire = new Vampire(req.body.name);
  vampire.save(db);
  res.send(vampire);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
