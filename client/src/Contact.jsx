import React from 'react';

const Contact = props => (
  <div id="contacts">
    <div className="contact">
      <div>
        {props.contactInfo.firstName} {props.contactInfo.lastName}
      </div>
    </div>
  </div>
);

export default Contact;
