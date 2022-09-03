require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const { NODE_ENV, TEST } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hellooooo World! Test: ' + TEST);
});

app.listen(port, () => {
  console.log(
    `👂 App listening at http://localhost:${port} - ENV: ${NODE_ENV}`
  );
});
