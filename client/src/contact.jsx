import React from 'react';

class Contact extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <span>{this.props.contact.firstName + " "}{this.props.contact.lastName}</span>
      <button onClick={()=>this.deleteContact}> Delete Contact</button>
    </div>
  
    )
  }
}



export default Contact;