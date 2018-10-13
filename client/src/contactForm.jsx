import React from 'react';
import axios from 'axios'

class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      homeaddress: '',
      deletedContact:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }  

  handleChange(event) {
    console.log('field id', event.target.id);
    console.log('value', event.target.value,)

    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submitForm() {
    this.props.postContact(this.state);
  }

  render(){
    return(
      <div class="contact-form-item">
       <label> First Name </label>
       <input type="text" id="firstName" onChange={this.handleChange}></input>
       <label> Last Name </label>
       <input type="text" id="lastName" onChange={this.handleChange}></input>
       <label> Email </label>
       <input type="text" id="email" onChange={this.handleChange}></input>
       <label> Phone Number </label>
       <input type="text" id="phone" onChange={this.handleChange}></input>
       <label> Address </label>
       <input type="text" id="homeaddress" onChange={this.handleChange}></input>
       <button onClick={this.submitForm}> Add Contact</button>
      </div>
      
    )
  }
}
export default ContactForm;