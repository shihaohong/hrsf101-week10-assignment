let mysql = require ('mysql');
let connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'contacts',
});

const getContacts = (getContact) => {
  connection.query(`Select * from contactlist`, (error, result) => {
    if (error) {
      getContact(error, null);
    } else {
      getContact(null, result)
    }
  })
}

const searchContacts = (id, searchContact) => {
  connection.query(`Select * from contactlist where firstName = "${id}" or lastName="${id}"`, (error, result) => {
    if (error) {
      searchContact(error, null);
    } else {
      searchContact(null, result)
    }
  })
}

const postContacts = (contact, postContact) => {
  connection.query(`insert into contactlist (firstName, lastName, email, phone, homeaddress) VALUES("${contact.firstName}", "${contact.lastName}", "${contact.email}", "${contact.phone}", "${contact.homeaddress}")`, (error, data) => {
    if (error) {
      postContact(error, null);
    } else {
      postContact(null, data);
    }
  })
}

const deleteContact = (contact, deleteContact) => {
  connection.query(`delete * from contactlist where lastname="${contact.deleteId}`, (error, data) => {
    if (error) {
      deleteContact(error, null)
    } else {
      deleteContact(null, data);
    }
  })
}

module.exports.deleteContact = deleteContact;
module.exports.searchContacts = searchContacts;
module.exports.getContacts = getContacts;
module.exports.postContacts = postContacts;