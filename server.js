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

// Handles 404
app.use((req, res, next) => {
  next(res.status(404).json({
    message: 'Page Not Found',
  }));
});

// Error Handler
app.use((err, req, res) => {
  res.status(err.status || 500)
    .json({
      message: err.message || 'Server Error',
    });
});

const { Port } = process.env;
app.listen(Port, () => {
  console.log(`App running on port ${Port}`);
});
