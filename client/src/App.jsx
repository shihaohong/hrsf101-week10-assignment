import React from 'react';
import axios from 'axios';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.getContacts = this.getContacts.bind(this);
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    axios
      .get('/app/contacts')
      .then(response => {
        this.setState({
          contacts: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="contacts">
        <div className="contact">
          {this.state.contacts.map(contact => (
            <Contact contact={contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
