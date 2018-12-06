'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req, res) {
  console.log('Received POST request');

  const title = req.body.title;
  const header = req.body.header;
  const body = req.body.body;

  const response = {};
  response.title = title.toUpperCase();
  response.header = header.toUpperCase();
  response.body = body.toUpperCase();

  console.log('Responding with: ' + JSON.stringify(response));

  res.send(response);
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
