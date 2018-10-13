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
      searchResults: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.contactSearch = this.contactSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
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


  render() {
    var contacts=[];
    if (this.state.searchResults !== 'no results found') {
      for (var i = 0; i < this.state.searchResults.length; i++) {
        contacts.push(this.state.searchResults[i].firstName + ' ' + this.state.searchResults[i].lastName);
      }
    } else {
      contacts = this.state.searchResults;
    }

    return(
      <div>
        <h1>Contact List</h1>
        <form>
          <label className="contact-form-item">
            Name:
            <input value="" />
          </label>
          <label className="contact-form-item">
            Contact Number:
            <input value="" />
          </label>
          <button className="contact-form-item">
            Add Contact
          </button>
        </form>

        <Search contactSearch={this.contactSearch} handleChange={this.handleChange}/>

        <div>{contacts}</div>

      </div>
    )
  }
}

export default App;
