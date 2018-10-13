import React from 'react';


var Contacts = function(props) {
  const contacts = props.contacts.map((contact) =>
    <div className="contact">
      {contact.firstName + ' ' + contact.lastName}
    </div>
  );
  return (
    <div>
    {contacts}
    </div>
  )
}

export default Contacts;
