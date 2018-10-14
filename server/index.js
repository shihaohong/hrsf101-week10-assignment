const express = require('express');
const app = express();
const controllers = require('../db/index');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/app/contacts', (req, res) => {
  controllers.getContacts(req, res);
});

app.post('/app/contacts', (req, res) => {
  controllers.addContact(req, res);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}!`);
});
