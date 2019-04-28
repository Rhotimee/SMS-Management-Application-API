import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes/v1/index';
import './config/mongoConfig';

require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Timi SMS center',
  });
});

app.use('/api/v1', routes);

const { Port } = process.env;
app.listen(Port, () => {
  console.log(`App running on port ${Port}`);
});
