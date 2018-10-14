const db = require('../db/index.js')
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.get('/api/contacts', (req, res) => {
    console.log(req.body);
    db.getSearchedContact(req.body, (err, result) => {
      if (err) {
          res.sendStatus(400).send();
      } else {
          res.sendStatus(200).send(result);
      }
    });
});

app.post('/api/contacts', (req, res) => {
    db.insertNewContact(req.body, (err, result) => {
        if (err) {
            res.sendStatus(400).send();
        } else {
            res.sendStatus(200).send(result);
        }
    });
});
app.listen(port, () => console.log(`Listening on port ${port}`))
