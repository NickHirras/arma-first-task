const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {
   var title = req.body.title;
   var header = req.body.header;
   var body = req.body.body;

   var response = {};
   response.title = title.toUpperCase();
   response.header = header.toUpperCase();
   response.body = body.toUpperCase();
 
   res.send(response);
});

app.listen(port, () => console.log(`Server started on port: ${port}!`));


