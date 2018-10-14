const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'contact_list'
});

connection.connect();

exports.getContacts = (req, res) => {
  connection.query('SELECT * FROM contacts', (error, results) => {
    if (error) {
      console.log('error');
      res.status(500).send(error);
    } else {
      console.log('successful get from mySql');
      res.status(200).send(results);
    }
  });
};

exports.addContact = (req, res) => {
  connection.query(`INSERT INTO contacts (firstName, lastName, email, phone, address) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', ${req.body.phone}, '${req.body.address}')`, error => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send('contact added');
    }
  });
};
