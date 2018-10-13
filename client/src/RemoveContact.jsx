import React from 'react';
import axios from 'axios';

class RemoveContact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleRemoveChange = this.handleRemoveChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRemoveChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit(event) {
    axios.delete('/api/contacts', {
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
    })
      .then(res => {
        console.log(res + "SUCCESS IN DELETE")
      })
      .catch(err => {
        console.log(err + "ERROR IN DELETE")
      })
  }

  render() {
    return (
      <div>
        <h3>Delete Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              id="firstName"
              onChange={this.handleRemoveChange} />
            Last Name:
            <input
              type="text"
              id="lastName"
              onChange={this.handleRemoveChange} />
          </label>
          <input type="submit" value="Delete Contact" />
        </form>
      </div>
    )
  }
}

export default RemoveContact;