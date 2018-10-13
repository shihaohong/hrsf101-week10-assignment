const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'contacts'
});

connection.connect();

const getContacts = (callback) => {
  connection.query('SELECT * FROM contact', (err, result) => {
    if (err) {
      callback(err, null)
      console.log("ERROR IN QUERY" + err)
    } else {
      callback(null, result)
      console.log("SUCCESS IN QUERY" + result)
    }
  });
};

const newContact = (info, callback) => {
  let firstName = info.firstName;
  let lastName = info.lastName;
  let email = info.email;
  let phone = info.phone;
  let contactAddress = info.contactAddress;
  connection.query(`INSERT INTO contact(firstName,lastName,email,phone,contactAddress) 
    VALUES ("${firstName}","${lastName}","${email}","${phone}","${contactAddress}")`, (err, result) => {
    if (err) {
      callback(err, null);
      console.log("ERROR IN QUERY" + err);
    } else {
      callback(null, result);
      console.log("SUCCESS IN QUERY" + result);
    }
  });
};

const deleteContact = (info, callback) => {
  let firstName = info.firstName;
  let lastName = info.lastName;
  connection.query(`DELETE FROM contact WHERE firstName="${firstName}" 
  AND lastName="${lastName}"`, (err, result) => {
    if (err) {
      callback(err, null);
      console.log("ERROR IN QUERY" + err);
    } else {
      callback(null, result);
      console.log("SUCCESS IN DELETE" + result);
    }
  });
}

const contactInfo = (info, callback) => {
  let firstName = info.firstName;
  let lastName = info.lastName;
  connection.query(`SELECT * FROM contact WHERE firstName="${firstName}" OR lastName="${lastName}"`)
}

module.exports.getContacts = getContacts;
module.exports.newContact = newContact;
module.exports.deleteContact = deleteContact;
module.exports.contactInfo = contactInfo;