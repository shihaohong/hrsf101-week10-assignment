import React from 'react';

const ContactEntry = (props) => {

  return (
    <div>
      {props.contact.firstName} {props.contact.lastName}
    </div>
  )

}


export default ContactEntry;