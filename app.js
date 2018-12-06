const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
   res.send("GET /");
});

app.post('/', function (req, res) {
   res.send("POST /");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


