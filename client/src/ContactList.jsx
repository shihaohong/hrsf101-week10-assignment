import React from 'react';
import ContactEntry from './ContactEntry.jsx'

const ContactList = (props) => (
  <div>
    {
      props.contacts.map(contact => 
        <ContactEntry contact={contact} />
      )
    }
  </div>
)

export default ContactList; 

