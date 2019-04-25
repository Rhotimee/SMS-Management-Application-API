const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const app = express();


app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({
    'message': 'Welcome to Timi SMS center'
  })
});


const { Port } = process.env
app.listen(Port, () => {
  console.log(`App running on port ${Port}`)
});