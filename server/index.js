const express = require('express');
const app = express();
const path = require('path');
const db = require('../db/index');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use(bodyParser.json());
app. use(bodyParser.urlencoded({ extended: false }))

app.get('/api/contacts', (req, res) => {
  db.getContacts((err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/api/contacts', (req, res) => {
  db.contactInfo(req.body, (err, data) => {
    if (err) {
      console.log("ERROR IN GET")
      res.status(503).send(err);
    } else {
      console.log("SUCCESS IN GET")
      res.status(200).send(data);
    }
  })
})

app.post('/api/contacts', (req, res) => {
  db.newContact(req.body, (err, data) => {
    if (err) {
      console.log("ERROR IN POST");
      res.status(500).send(err);
    } else {
      console.log("SUCCESS IN POST");
      res.status(200).send(data)
    }
  });
});

app.delete('/api/contacts', (req, res) => {
  db.deleteContact(req.body, (err, data) => {
    if (err) {
      console.log("ERROR IN DELETE")
      res.status(404).send(err)
    } else {
      console.log("SUCCESS IN DELETE")
      res.status(200).send(data)
    }
  });
});

const PORT = 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));