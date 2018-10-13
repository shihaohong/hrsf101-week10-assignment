import React from 'react';
import axios from 'axios'
import ContactForm from './contactForm.jsx'
import ContactList from './contactList.jsx'
import Search from './search.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      
    }
    this.getContact = this.getContact.bind(this);
    this.postContact = this.postContact.bind(this);
  }

  componentDidMount() {
    console.log('mounting')
    this.getContact()
  }

  getContact() {
    let context = this;
    axios
    .get('/api/contacts')
    .then(response => {
      console.log('response',response)
       context.setState({
         contacts: response.data
       }); 
       console.log('contacts', this.state.contacts)
      })
    .catch(error => {
      console.log('cannot get', error);
    })
  }
  
  postContact(contact) {
    axios
    .post('/api/contacts', contact)
      .then(this.getContact)
      .catch(error => {
        console.log('cannot post', error);
      });
  }



  render() {
    return(
      <div>
        <Search />
        <ContactForm postContact={this.postContact}/>
        <ContactList contactList={this.state.contacts}/>
      </div>
    )
  }
}
export default App;