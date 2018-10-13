const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./../db/index.js');

app.use(express.json());
app.use(express.static(__dirname + './../client/dist'));

app.get('/api/contacts', (req, res) => {
  db.getContact(req.query.firstName, function(err, data) {
    if (err) {
      console.log(err)
      res.send(err).status(500);
    } else {
      res.send(data);
    }
  });
})

app.post('/api/contacts', (req, res) => {
  db.addContact(function(err, data) {
    if (err) {
      console.log(err, null);
    } else {
      console.log('successful post');
    }
  });
})

app.listen(8080, () => console.log('listening on port 8080!'));
