import React from 'react';

class Contact extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return( 
      <form onSubmit={this.props.deleteContact} value={this.props.contact.lastName}>
      <div id={this.props.contact.lastName}>{this.props.contact.firstName + " "}{this.props.contact.lastName}</div>
      <button type="submit" value={this.props.contact.lastName}> Delete Contact</button>
    </form>
  
    )
  }
}

//onClick={()=>this.props.deleteContact}

export default Contact;