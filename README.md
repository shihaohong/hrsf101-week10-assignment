# Contact List App

Use React.js, MySQL and Express.js to create a contact list app! 

You can use the following data: 

```javascript
var contacts = [
  {
    firstName: 'John',
    lastName: 'Appleseed',
    email: 'john@appleseed.com',
    phone: 1234567890,
    address: '944 Market St.'
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@doe.org',
    phone: 9807654321,
    address: '44 Tehama St.'
  }
];
```

## Back-end

### Database
- [X] Using MySQL, create a schema to store your contact information. You may seed the database with dummy data to test functionality

### Server
- [X] When a GET request is made to /api/contacts, respond with a list of contacts (just start with some made up list)
- [X] When a POST request is made to /api/contacts, update your database with a new entry. 

## Front-end

### Display Contacts
- [X] Display a list of contacts from hardcoded data. Make sure to only the first name and last name.

### Search Contacts
- [ X] Add a search bar so that a user may see if a contact is in the list. 
- [ X] After a user submits the search, display all matches (or partial matches) to that first or last name.
- [X ] Handle the case of "no contact by that name found" gracefully.

### Add/Remove Contacts Contacts
- [X] Make form for users to add contacts functional. Add validation to ensure that every field cannot be empty.
- [ ] Display only user added contacts, not the hardcoded data.
- [ ] Add a button to remove contacts, prompting for validation so that the user needs to confirm before deletion.

### Favorites
- [ ] Add a button to each list item that allows the user to toggle a 'favorites' property.
- [ ] Add two buttons to allow the users to toggle between a list of 'favorite' contacts.

### Display Contact Information
- [ ] Add a panel of contact information that appears when the contact is clicked (consider starting with hardcoded information)
