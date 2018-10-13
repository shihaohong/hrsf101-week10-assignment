import React from 'react';
import Contact from './contact.jsx';
import axios from 'axios';

class ContactList extends React.Component {
  constructor(props){
    super(props);
    this.deleteContact = this.deleteContact.bind(this);
  }
  deleteContact(name){
    axios.delete('/api/contacts/)
  }
  render() {
    return(
      <div>
      <div>
      {
        props.contactList.map(contact => <Contact contact={contact} 
         deleteContact={this.deleteContact}/> )
      }
    </div>

    </div>
    )
  }

}


export default ContactList;