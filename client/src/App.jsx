import React from 'react';
import axios from 'axios';
import ContactList from './ContactList.jsx';
import Search from './Search.jsx'
import UserDataForm from './UserDataForm.jsx'
import RemoveContact from './RemoveContact.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    axios.get('/api/contacts')
    .then(data => {
      this.setState({
        contacts: data.data
      }); 
    })
    .catch(err => {
      console.log("Error in GET")
    })
  };



  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <Search />
        <UserDataForm />
        <RemoveContact />
        <ContactList contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;