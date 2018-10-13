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

const addContact = function(item, callback) {
  connection.query('insert into contacts (firstName, lastName) values ("Matt", "R");', function (err, rows) {
    if (err) {
      callback(err, null);
    } else {
      console.log('good post');
    }
  });
}

module.exports.getContact = getContact;
module.exports.addContact = addContact;
