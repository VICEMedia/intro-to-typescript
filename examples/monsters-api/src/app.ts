import * as express from 'express';
import * as bodyParser from 'body-parser';
import Vampire from './models/Vampire';

// Initialize app and routes
const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', async (req, res) => {
});

app.post('/vampires', async (req, res) => {
  const vampire = new Vampire(req.body.name);
  await vampire.save().catch(console.error);
  res.send(vampire);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
