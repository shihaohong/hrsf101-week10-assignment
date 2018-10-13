import React from 'react';
import Search from './Search.jsx';
import Contacts from './Contacts.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          firstName: 'John',
          lastName: 'Appleseed'
        },
        {
          firstName: 'Jane',
          lastName: 'Doe'
        }
      ],
      searchValue: '',
      searchResults: '',
      inputName: '',
      inputNumber: 0,
      deleteName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.contactSearch = this.contactSearch.bind(this);
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  contactSearch() {
    axios.get('/api/contacts', {
      params:{
        firstName: this.state.searchValue
      }
    })
    .then((response) => {
      if (response.data.length === 0) {
        this.setState({
          searchResults: 'no results found'
        })
      } else {
        this.setState({
          searchResults: response.data
        })
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  addContact(event) {
    event.preventDefault();
    if (this.state.inputName.length === 0) {
      alert('Name Required');
      return
    }
    if (this.state.inputNumber === 0) {
      alert('Number Required');
      return
    }

    axios.post('/api/contacts', {
    //keeping it simple for mvp by storing whole name as firstName in db
      firstName: this.state.inputName,
      phone: this.state.inputNumber
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deleteContact() {
    if (confirm('really delete?')) {
      axios.delete('/api/contacts', {
        data: {
          name: this.state.deleteName
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    } 
  }


  render() {
    var contacts=[];
    if (this.state.searchResults !== 'no results found') {
      for (var i = 0; i < this.state.searchResults.length; i++) {
        contacts.push(this.state.searchResults[i].firstName);// + ' ' + this.state.searchResults[i].lastName);
      }
    } else {
      contacts = this.state.searchResults;
    }

    return(
      <div>
        <h1>Contact List</h1>
          <label className="contact-form-item">
            Name:
            <input name={'inputName'} onChange={this.handleChange} />
          </label>
          <label className="contact-form-item">
            Contact Number:
            <input name={'inputNumber'} onChange={this.handleChange} />
          </label>
          <button className="contact-form-item" onClick={this.addContact}>
            Add Contact
          </button>


        <Search contactSearch={this.contactSearch} handleChange={this.handleChange}/>

        <div>{contacts}</div>

        <label className="contact-form-item">
          Delete Contact:
          <input name={'deleteName'} onChange={this.handleChange} />
        </label>
        <button className="contact-form-item" onClick={this.deleteContact}>
          Delete Contact
        </button>

      </div>
    )
  }
}

export default App;
