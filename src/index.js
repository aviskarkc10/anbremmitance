import express from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();

import routes from './routes';

const PORT = 8080;

let app = express();
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, ()=> {
  console.log(`Node app is running on port, ${PORT}`);
});
