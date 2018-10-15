const express = require('express');
const db = require('../db/index.js')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser())
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/contacts', (req, res) => {
  db.getContacts((err, data) => {
    if (err) {
      console.log('not getting')
      res.sendStatus(400);
    }
    res.status(200).send(data);
  })
})

app.get('/api/contacts/:name', (req, res) => {
  let firstName = req.params.name
  db.searchContacts(firstName, (err, data) => {
    if (err) {
      console.log('not getting')
      res.sendStatus(400);
    }
    res.status(200).send(data);
  })
})

app.delete('api/contacts', (req, res) => {
  console.log(req.params.id)
  db.deleteContact(req.params.id, (err) => {
    if(err){
      console.log('server error cant delete', err)
      res.sendStatus(400);
    }
    res.status(200).send('delete successful') 
  })
})


app.post('/api/contacts', (req, res) => {
  db.postContacts(req.body, (err) => {
    if(err) {
      res.status(500).send(err)
    }
    res.status(201).send()
  })
})

const PORT = 2000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}!`)})