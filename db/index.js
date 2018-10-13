var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'contactlist'
});

const getContact = function(input, callback) {
  connection.query(`select firstName, lastName from contacts where firstName = "${input}";`, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const addContact = function(input, callback) {
  connection.query(`insert into contacts (firstName, phone) values ("${input.firstName}", ${input.phone});`, function (err, data) {
    if (err) {
      callback(err, null);
    }
  });
}

const deleteContact = function(input, callback) {
  connection.query(`delete from contacts where firstName = "${input}";`, function (err, data) {
    if (err) {
      callback(err, null);
    }
  });
}

module.exports.getContact = getContact;
module.exports.addContact = addContact;
module.exports.deleteContact = deleteContact;
