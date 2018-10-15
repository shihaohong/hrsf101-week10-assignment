import React from 'react';
import Contact from './contact.jsx';
import axios from 'axios';

class ContactList extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return(
      <div>
      <div >
      {
        this.props.contactList.map(contact => <Contact contact={contact} key={contact.id}
         deleteContact={this.props.deleteContact}/> )    
      }
    </div>

    </div>
    )
  }

}


export default ContactList;