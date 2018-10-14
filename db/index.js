var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'Student12345!', 
    database: 'contact_list'
});

connection.connect()

const getSearchedContact = (callback) => {
    connection.query('select firstName, lastName from contacts where  ', function (err, result) {
        if (err) {
            console.log('error found in query', err);
        } else {
            callback(null, result)
        }
    });
}

const insertNewContact = (req, res) => {
    connection.query(`insert into contacts values (${req.body.firstName}, ${req.body.lastName}, ${req.body.email}, ${req.body.phone}, ${req.body.address})`, function(err, result) {
        if (err) {
            console.log("error found in insert query", err);
        }
    });
}
connection.end();

// module.exports = {
//     getAllContacts: getAllContacts,
//     insertNewContact: insertNewContact
// };
module.exports = { getSearchedContact, insertNewContact};