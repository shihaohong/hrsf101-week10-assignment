import React from 'react';
import axios from 'axios';

class UserDataForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      contactAddress: '',
    }
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    // event.preventDefault();
    axios.post('/api/contacts', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      contactAddress: this.state.contactAddress,
    })
    .then(res => {
      console.log(res + "Success in Submit")
    })
    .catch(err => {
      console.log(err + "Error in Submit")
    })
  }
  render() {
    return (
      <div>
      <h3>Add New Contact</h3>
      <form onSubmit={this.handleSubmit}>
        <label>
           First Name:
          <input type="text" id="firstName" onChange={this.handleAddChange} />
          Last Name:
          <input type="text" id="lastName" onChange={this.handleAddChange} />
          Email:
          <input type="email" id="email" onChange={this.handleAddChange} />
          Phone Number:
          <input type="number" id="phone" onChange={this.handleAddChange} />
          Address:
          <input type="text" id="contactAddress" onChange={this.handleAddChange} />
        </label>
          <input type="submit" value="Add Contact" />
      </form>
      </div>
    ) 
  }
  
}

export default UserDataForm;