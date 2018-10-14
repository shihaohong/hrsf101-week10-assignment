import React from 'react';

const SearchContacts = props => {
  return (
    <div>
      <label className="contact-form-item">Search Contacts:</label>
      <input type="text" onChange={props.queryContacts} />
    </div>
  );
};

export default SearchContacts;
