import React from 'react';
import axios from 'axios'
import ContactForm from './contactForm.jsx'
import ContactList from './contactList.jsx'
import Search from './search.jsx'
import $ from 'jquery'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      deleteId: ''
    }
    this.getContact = this.getContact.bind(this);
    this.postContact = this.postContact.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteContactOnClick = this.deleteContactOnClick.bind(this);

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
  deleteContactOnClick(e){
    axios.delete(`/api/contacts`, {params: {id: deleteId}})
    .then(res => {

    })
    .catch(error => {
      console.log('cannot delete', error)
    })
  }

  handleDelete(e){
    e.preventDefault();
    let remainingContacts = this.state.contacts.splice(this.state.contacts.id, 1)
    this.setState({
      deleteId : this.state.contacts.lastName
    })
    console.log(deleteId)
    this.deleteContactOnClick()
  }

  


  render() {
    return(
      <div>
        <Search />
        <ContactForm postContact={this.postContact}/>
        <ContactList contactList={this.state.contacts} deleteContact={this.handleDelete}/>
      </div>
    )
  }
}
export default App;