import React from 'react';

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      address: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    this.props.saveContact(this.state);
  }

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <label className="contact-form-item">First Name:</label>
        <input name="firstName" type="text" onChange={this.handleChange} />
        <label className="contact-form-item">Last Name:</label>
        <input name="lastName" type="text" onChange={this.handleChange} />
        <label className="contact-form-item">Email:</label>
        <input name="email" type="email" onChange={this.handleChange} />
        <label className="contact-form-item">Phone:</label>
        <input name="phone" type="number" onChange={this.handleChange} />
        <label className="contact-form-item">Address:</label>
        <input name="address" type="text" onChange={this.handleChange} />
        <button className="contact-form-item" onClick={() => this.handleSubmit()}>
          Add Contact
        </button>
      </div>
    );
  }
}

export default AddContact;
