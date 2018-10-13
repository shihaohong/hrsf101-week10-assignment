import React from 'react';
import axios from 'axios';
import Contact from './Contact.jsx';
import AddContact from './AddContact.jsx';
import SearchContacts from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      queriedContacts: []
    };
    this.getContacts = this.getContacts.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.queryContacts = this.queryContacts.bind(this);
  }

  componentDidMount() {
    console.log('comp did mount triggering');
    this.getContacts();
  }

  getContacts() {
    axios
      .get('/app/contacts')
      .then(response => {
        this.setState({
          contacts: response.data,
          queriedContacts: response.data
        });
      })
      .catch(error => {
        console.log('error here', error);
      });
  }

  saveContact(newContact) {
    axios
      .post('/app/contacts', newContact)
      .then(() => {
        console.log('contact successfully saved');
        this.getContacts();
      })
      .catch(error => {
        console.log(error);
      });
  }

  queryContacts(event) {
    console.log(event.target.value);
    var searchedContacts = [];
    for (var i = 0; i < this.state.contacts.length; i++) {
      if (this.state.contacts[i].firstName.toLowerCase().includes(event.target.value) || this.state.contacts[i].lastName.toLowerCase().includes(event.target.value)) {
        searchedContacts.push(this.state.contacts[i]);
      }
    }
    if (searchedContacts.length === 0) {
      this.setState({
        queriedContacts: []
      });
    } else {
      this.setState({
        queriedContacts: searchedContacts
      });
    }
  }

  render() {
    console.log(this.state.contacts.data);
    return (
      <div>
        <SearchContacts queryContacts={this.queryContacts} />
        <AddContact saveContact={this.saveContact} />
        {this.state.queriedContacts.length === 0 ? (
          <div>"no contact by that name found"</div>
        ) : (
          <div id="contacts">
            <div className="contact">
              {this.state.queriedContacts.map(contact => (
                <Contact key={contact.email} contactInfo={contact} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
